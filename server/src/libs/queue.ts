import { Queue, Worker, Job } from 'bullmq';
import { getRedisClient } from './redis';

export type FeedFanoutJob = {
	postId: string;
	authorId: string;
	createdAt: number; // ms timestamp used as score
};

let feedFanoutQueue: Queue<FeedFanoutJob> | undefined;

export function getFeedFanoutQueue() {
	if (!feedFanoutQueue) {
		const connection = (getRedisClient() as any).options;
		feedFanoutQueue = new Queue<FeedFanoutJob>('feed-fanout', { connection });
	}
	return feedFanoutQueue;
}

export function createFeedFanoutWorker(processor: (job: Job<FeedFanoutJob>) => Promise<void>) {
	const connection = (getRedisClient() as any).options;
	return new Worker<FeedFanoutJob>('feed-fanout', processor, { connection });
}
