import {PrismaClient} from "@prisma/client";

export const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};