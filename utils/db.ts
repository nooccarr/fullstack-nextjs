import { PrismaClient } from '@prisma/client';

// IMPORTANT

// as unknown as: typescript / a fancy way of coerce a type into something
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

// only in development mode
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
