import { createApp } from './app';
import { createFeedFanoutWorker } from './libs/queue';
import { processFeedFanout } from './modules/feed/worker';

const port = Number(process.env.PORT || 4000);
const host = process.env.HOST || '0.0.0.0';

async function start() {
	if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
		console.warn('JWT secrets not set. Using insecure defaults for dev.');
		process.env.JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change';
		process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'dev-refresh-secret-change';
	}
	// start queue worker
	createFeedFanoutWorker(processFeedFanout);
	try {
		const server = await createApp();
		await server.listen({ port, host });
		server.log.info(`server listening on http://${host}:${port}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}

start();


