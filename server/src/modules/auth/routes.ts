import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { z } from 'zod';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { getPrismaClient } from '../../libs/prisma';
import { getRedisClient } from '../../libs/redis';

const AccessTokenTtlSec = 60 * 15; // 15m
const RefreshTokenTtlSec = 60 * 60 * 24 * 7; // 7d

const signupSchema = z.object({
	email: z.string().email(),
	handle: z.string().min(3).max(30),
	password: z.string().min(8).max(100),
	name: z.string().min(1).max(100),
});

const loginSchema = z.object({
	login: z.string().min(3), // email or handle
	password: z.string().min(8).max(100),
});

const refreshSchema = z.object({ refreshToken: z.string().min(10) });

function signAccessToken(payload: object): string {
	const secret = process.env.JWT_SECRET as string;
	return jwt.sign(payload, secret, { expiresIn: AccessTokenTtlSec });
}

function signRefreshToken(payload: object, jti: string): string {
	const secret = process.env.JWT_REFRESH_SECRET as string;
	return jwt.sign({ ...payload, jti }, secret, { expiresIn: RefreshTokenTtlSec });
}

export default async function authRoutes(app: FastifyInstance, _opts: FastifyPluginOptions) {
	const prisma = getPrismaClient();
	const redis = getRedisClient();

	app.post('/auth/signup', { config: { rateLimit: { max: 5, timeWindow: '1 minute' } } }, async (req, reply) => {
		const parse = signupSchema.safeParse(req.body);
		if (!parse.success) {
			return reply.code(400).send({ error: { code: 'BAD_REQUEST', message: 'Invalid body', details: parse.error.flatten() } });
		}
		const { email, handle, password, name } = parse.data;
		const existing = await prisma.user.findFirst({ where: { OR: [{ email }, { handle }] } });
		if (existing) return reply.code(409).send({ error: { code: 'CONFLICT', message: 'Email or handle already exists' } });
		const passwordHash = await argon2.hash(password);
		const user = await prisma.user.create({
			data: {
				email,
				handle,
				passwordHash,
				profile: { create: { name } },
			},
		});
		const jti = uuidv4();
		const accessToken = signAccessToken({ sub: user.id, role: user.role });
		const refreshToken = signRefreshToken({ sub: user.id }, jti);
		await redis.set(`refresh:${jti}`, '1', 'EX', RefreshTokenTtlSec);
		return reply.send({ accessToken, refreshToken, user: { id: user.id, handle: user.handle, email: user.email } });
	});

	app.post('/auth/login', { config: { rateLimit: { max: 10, timeWindow: '1 minute' } } }, async (req, reply) => {
		const parse = loginSchema.safeParse(req.body);
		if (!parse.success) return reply.code(400).send({ error: { code: 'BAD_REQUEST', message: 'Invalid body', details: parse.error.flatten() } });
		const { login, password } = parse.data;
		const user = await prisma.user.findFirst({ where: { OR: [{ email: login }, { handle: login }] } });
		if (!user) return reply.code(401).send({ error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' } });
		const ok = await argon2.verify(user.passwordHash, password);
		if (!ok) return reply.code(401).send({ error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' } });
		const jti = uuidv4();
		const accessToken = signAccessToken({ sub: user.id, role: user.role });
		const refreshToken = signRefreshToken({ sub: user.id }, jti);
		await redis.set(`refresh:${jti}`, '1', 'EX', RefreshTokenTtlSec);
		return reply.send({ accessToken, refreshToken, user: { id: user.id, handle: user.handle, email: user.email } });
	});

	app.post('/auth/refresh', { config: { rateLimit: { max: 30, timeWindow: '1 minute' } } }, async (req, reply) => {
		const parse = refreshSchema.safeParse(req.body);
		if (!parse.success) return reply.code(400).send({ error: { code: 'BAD_REQUEST', message: 'Invalid body', details: parse.error.flatten() } });
		const { refreshToken } = parse.data;
		try {
			const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as { sub: string; jti?: string };
			if (!decoded.jti) return reply.code(401).send({ error: { code: 'UNAUTHORIZED', message: 'Invalid token' } });
			const exists = await redis.get(`refresh:${decoded.jti}`);
			if (!exists) return reply.code(401).send({ error: { code: 'UNAUTHORIZED', message: 'Token revoked' } });
			const newJti = uuidv4();
			await redis.del(`refresh:${decoded.jti}`);
			await redis.set(`refresh:${newJti}`, '1', 'EX', RefreshTokenTtlSec);
			const accessToken = signAccessToken({ sub: decoded.sub });
			const newRefreshToken = signRefreshToken({ sub: decoded.sub }, newJti);
			return reply.send({ accessToken, refreshToken: newRefreshToken });
		} catch (e) {
			return reply.code(401).send({ error: { code: 'UNAUTHORIZED', message: 'Invalid token' } });
		}
	});

	app.post('/auth/logout', { config: { rateLimit: { max: 30, timeWindow: '1 minute' } } }, async (req, reply) => {
		const parse = refreshSchema.safeParse(req.body);
		if (!parse.success) return reply.code(400).send({ error: { code: 'BAD_REQUEST', message: 'Invalid body', details: parse.error.flatten() } });
		const { refreshToken } = parse.data;
		try {
			const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as { jti?: string };
			if (decoded.jti) await redis.del(`refresh:${decoded.jti}`);
			return reply.send({ success: true });
		} catch {
			return reply.send({ success: true });
		}
	});
}
