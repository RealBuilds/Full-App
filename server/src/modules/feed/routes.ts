import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { getRedisClient } from '../../libs/redis';
import { getPrismaClient } from '../../libs/prisma';

function timelineKey(userId: string) {
	return `feed:timeline:${userId}`;
}

const querySchema = z.object({
	cursor: z.string().optional(),
	limit: z.coerce.number().min(1).max(50).default(20),
});

export default async function feedRoutes(app: FastifyInstance) {
	const redis = getRedisClient();
	const prisma = getPrismaClient();

	app.get('/v1/feed', async (req, reply) => {
		// naive auth extraction: Authorization: Bearer <token>; decoded set by upstream auth middleware in future
		const userId = (req.headers['x-user-id'] as string) || '';
		if (!userId) return reply.code(401).send({ error: { code: 'UNAUTHORIZED', message: 'Missing user' } });
		const parse = querySchema.safeParse(req.query);
		if (!parse.success) return reply.code(400).send({ error: { code: 'BAD_REQUEST', message: 'Invalid query', details: parse.error.flatten() } });
		const { cursor, limit } = parse.data;

		// Pagination via ZREVRANGEBYSCORE with cursor being a score:id delimiter
		let maxScore = '+inf';
		let minScore = '-inf';
		if (cursor) {
			maxScore = `(${cursor}`; // exclusive start from previous cursor
		}
		// get candidates
		const scoresWithMembers = await redis.zrevrangebyscore(timelineKey(userId), maxScore, minScore, 'WITHSCORES', 'LIMIT', 0, limit * 2);
		// scoresWithMembers = [member, score, member, score, ...]
		const pairs: { id: string; score: number }[] = [];
		for (let i = 0; i < scoresWithMembers.length; i += 2) {
			pairs.push({ id: scoresWithMembers[i] as string, score: Number(scoresWithMembers[i + 1]) });
		}

		// Load posts and filter by visibility and blocks
		const postIds = pairs.map((p) => p.id);
		if (postIds.length === 0) return reply.send({ items: [], nextCursor: null });

		// Blocks: exclude authors the viewer blocked, and authors who blocked the viewer
		const [myBlocks, blocksMe] = await Promise.all([
			prisma.block.findMany({ where: { blockerId: userId }, select: { blockedId: true } }),
			prisma.block.findMany({ where: { blockedId: userId }, select: { blockerId: true } }),
		]);
		const blockedSet = new Set(myBlocks.map((b) => b.blockedId));
		const blockedBySet = new Set(blocksMe.map((b) => b.blockerId));

		const posts = await prisma.post.findMany({
			where: {
				id: { in: postIds },
				deletedAt: null,
			},
			include: { author: { select: { id: true, handle: true, profile: { select: { privateFlag: true } } } } },
		});

		const authorIds = posts.map((p) => p.authorId);
		const followSet = new Set(
			(
				await prisma.follow.findMany({ where: { followerId: userId, followeeId: { in: authorIds } }, select: { followeeId: true } })
			).map((f) => f.followeeId),
		);

		const visible = posts.filter((p) => {
			if (blockedSet.has(p.authorId)) return false; // I blocked the author
			if (blockedBySet.has(p.authorId)) return false; // Author blocked me
			if (p.visibility === 'PUBLIC') return true;
			if (p.visibility === 'FOLLOWERS') {
				// If author's profile is private, require follower or self
				const isPrivate = !!p.author.profile?.privateFlag;
				if (isPrivate) return followSet.has(p.authorId) || p.authorId === userId;
				return true;
			}
			if (p.visibility === 'PRIVATE') return p.authorId === userId;
			return false;
		});

		// order by score desc according to pairs order
		const scoreMap = new Map(pairs.map((p) => [p.id, p.score]));
		visible.sort((a, b) => (scoreMap.get(b.id) || 0) - (scoreMap.get(a.id) || 0));
		const items = visible.slice(0, limit);
		const last = items[items.length - 1];
		const nextCursor = last ? String(scoreMap.get(last.id)) : null;
		return reply.send({ items, nextCursor });
	});
}
