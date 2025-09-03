import { Job } from 'bullmq';
import { getRedisClient } from '../../libs/redis';
import { FeedFanoutJob } from '../../libs/queue';
import { getPrismaClient } from '../../libs/prisma';

function timelineKey(userId: string) {
	return `feed:timeline:${userId}`;
}

export async function processFeedFanout(job: Job<FeedFanoutJob>) {
	const { authorId, postId, createdAt } = job.data;
	const prisma = getPrismaClient();
	const redis = getRedisClient();

	// Find followers who should see the post (exclude blocked users and private visibility handled later)
	const followers = await prisma.follow.findMany({
		where: { followeeId: authorId },
		select: { followerId: true },
	});
	const followerIds = followers.map((f) => f.followerId);

	if (!followerIds.length) return;

	// Add to each follower's ZSET with score = createdAt
	const pipeline = redis.pipeline();
	for (const uid of followerIds) {
		pipeline.zadd(timelineKey(uid), createdAt, postId);
	}
	await pipeline.exec();
}
