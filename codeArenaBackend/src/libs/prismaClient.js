import { PrismaClient } from '../generated/prisma-client-js/index.js';

const globalForPrisma = globalThis;

const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}

export { db as prisma };