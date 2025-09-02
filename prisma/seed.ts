import { PrismaClient, Role, Visibility, NotificationType } from '../prisma/generated/prisma';

const prisma = new PrismaClient();

function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickMany<T>(arr: T[], count: number): T[] {
	const shuffled = [...arr].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, Math.min(count, arr.length));
}

async function main() {
	// Create 50 users + profiles
	const users = await Promise.all(
		Array.from({ length: 50 }).map(async (_, i) => {
			const handle = `user${i + 1}`;
			const email = `${handle}@example.com`;
			const user = await prisma.user.create({
				data: {
					email,
					handle,
					passwordHash: `seedhash-${handle}`,
					role: Role.USER,
					profile: {
						create: {
							name: `User ${i + 1}`,
							bio: `Hello, I'm ${handle}`,
							privateFlag: Math.random() < 0.1,
						},
					},
				},
				include: { profile: true },
			});
			return user;
		}),
	);

	// Follows: each user follows 5-20 random others
	for (const u of users) {
		const others = users.filter((x) => x.id !== u.id);
		const followTargets = pickMany(others, randomInt(5, 20));
		for (const t of followTargets) {
			await prisma.follow.create({
				data: { followerId: u.id, followeeId: t.id },
			});
			await prisma.notification.create({
				data: {
					userId: t.id,
					type: NotificationType.FOLLOW,
					actorId: u.id,
				},
			});
		}
	}

	// Posts: each user creates 1-5 posts
	const allPosts = [] as { id: string; authorId: string }[];
	for (const u of users) {
		const numPosts = randomInt(1, 5);
		for (let j = 0; j < numPosts; j++) {
			const post = await prisma.post.create({
				data: {
					authorId: u.id,
					text: `Post ${j + 1} by ${u.handle}`,
					visibility: Math.random() < 0.15 ? Visibility.FOLLOWERS : Visibility.PUBLIC,
				},
			});
			allPosts.push({ id: post.id, authorId: u.id });
		}
	}

	// Likes and comments from followers
	for (const post of allPosts) {
		const authorFollowers = await prisma.follow.findMany({
			where: { followeeId: post.authorId },
			select: { followerId: true },
		});
		const followerIds = authorFollowers.map((f) => f.followerId);
		const likeUsers = pickMany(followerIds, randomInt(0, Math.min(10, followerIds.length)));
		for (const uid of likeUsers) {
			await prisma.like.create({ data: { userId: uid, postId: post.id } });
			await prisma.notification.create({
				data: {
					userId: post.authorId,
					type: NotificationType.LIKE,
					actorId: uid,
					postId: post.id,
				},
			});
		}
		const commentUsers = pickMany(followerIds, randomInt(0, Math.min(5, followerIds.length)));
		for (const uid of commentUsers) {
			const c = await prisma.comment.create({
				data: { authorId: uid, postId: post.id, text: `Nice one @${post.authorId.slice(0, 6)}!` },
			});
			await prisma.notification.create({
				data: {
					userId: post.authorId,
					type: NotificationType.COMMENT,
					actorId: uid,
					postId: post.id,
					commentId: c.id,
				},
			});
		}
	}

	console.log('Seed completed');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
