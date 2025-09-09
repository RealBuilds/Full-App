import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import rateLimit from '@fastify/rate-limit';
import authRoutes from './modules/auth/routes';
import feedRoutes from './modules/feed/routes';
import { setupSockets } from './web/sockets';

export async function createApp(): Promise<FastifyInstance> {
	const server = Fastify({
		logger: {
			transport: process.env.NODE_ENV === 'production' ? undefined : {
				target: 'pino-pretty',
				options: { translateTime: 'SYS:standard', colorize: true }
			}
		}
	});

	await server.register(cors, { origin: true, credentials: true });
	await server.register(helmet);
	await server.register(rateLimit, { max: 100, timeWindow: '1 minute' });

	await server.register(swagger, {
		openapi: { info: { title: 'Verified Athlete Sphere API', version: '0.1.0' } },
	});
	await server.register(swaggerUi, { routePrefix: '/docs' });

	server.get('/health', async () => ({ status: 'ok' }));

	await server.register(authRoutes);
	await server.register(feedRoutes);
	await setupSockets(server);

	return server;
}
