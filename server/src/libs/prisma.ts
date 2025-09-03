import { PrismaClient } from '../../../prisma/generated/prisma';

let prisma: PrismaClient | undefined;

export function getPrismaClient(): PrismaClient {
	if (!prisma) {
		prisma = new PrismaClient();
	}
	return prisma;
}
