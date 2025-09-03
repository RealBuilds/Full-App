import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import rateLimit from '@fastify/rate-limit';
import authRoutes from './modules/auth/routes';
import feedRoutes from './modules/feed/routes';
import { createFeedFanoutWorker } from './libs/queue';
import { processFeedFanout } from './modules/feed/worker';

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
	openapi: {
		info: { title: 'Verified Athlete Sphere API', version: '0.1.0' }
	}
});
await server.register(swaggerUi, { routePrefix: '/docs' });

server.get('/health', async () => ({ status: 'ok' }));

// Auth routes
await server.register(authRoutes);
// Feed routes
await server.register(feedRoutes);

const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || '0.0.0.0';

async function start() {
	if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
		server.log.warn('JWT secrets not set. Using insecure defaults for dev.');
		process.env.JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change';
		process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret-change';
	}
	// start queue worker
	createFeedFanoutWorker(processFeedFanout);
	try {
		await server.listen({ port, host });
		server.log.info(`server listening on http://${host}:${port}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
}

start();


