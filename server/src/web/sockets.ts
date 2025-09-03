import fastifySocketIO from 'fastify-socket.io';
import { FastifyInstance } from 'fastify';

export async function setupSockets(app: FastifyInstance) {
	await app.register(fastifySocketIO, {
		cors: { origin: true, credentials: true },
		path: '/socket.io',
	});

	const io = app.io;

	io.of('/notifications').on('connection', (socket) => {
		const userId = (socket.handshake.auth?.userId as string) || (socket.handshake.headers['x-user-id'] as string);
		if (!userId) {
			socket.disconnect(true);
			return;
		}
		socket.join(`user:${userId}`);
		socket.emit('connected', { ok: true });
	});

	io.of('/dms').on('connection', (socket) => {
		const userId = (socket.handshake.auth?.userId as string) || (socket.handshake.headers['x-user-id'] as string);
		if (!userId) {
			socket.disconnect(true);
			return;
		}
		socket.join(`user:${userId}`);
		socket.on('dm:joinThread', ({ threadId }: { threadId: string }) => {
			socket.join(`thread:${threadId}`);
		});
		socket.on('dm:message', ({ threadId, text }: { threadId: string; text: string }) => {
			io.of('/dms').to(`thread:${threadId}`).emit('dm:message', { threadId, text, ts: Date.now() });
		});
	});
}
