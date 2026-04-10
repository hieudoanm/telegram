import { PrismaClient } from '@telegram/generated/prisma/client';

export const prismaClient = new PrismaClient({ accelerateUrl: '' });
