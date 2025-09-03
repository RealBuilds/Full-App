import Redis from 'ioredis';

let redis: Redis | undefined;

export function getRedisClient(): Redis {
	if (!redis) {
		const url = process.env.REDIS_URL || 'redis://localhost:6379';
		redis = new Redis(url, { maxRetriesPerRequest: null });
	}
	return redis;
}
