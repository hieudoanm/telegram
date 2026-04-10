import { User } from '@telegram/generated/prisma/client';
import { prismaClient } from '@telegram/prisma/prisma.client';
import { JWT } from '@telegram/utils/jwt';
import { tryCatch } from '@telegram/utils/try-catch';
import {
  CreateNextContextOptions,
  NextApiRequest,
  NextApiResponse,
} from '@trpc/server/adapters/next';

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  const cookiesMap = new Map(Object.entries(req.cookies));
  const authToken: string = cookiesMap.get('auth-token') ?? '';
  if (!authToken) return { req, res, user: null };
  const { user } = JWT().verify(authToken);
  const { data, error } = await tryCatch<User>(
    prismaClient.user.findUniqueOrThrow({ where: { id: user?.id ?? 0 } })
  );
  if (error) throw Error(error.message);
  if (!data) throw Error('Invalid User');
  return { req, res, user: data };
};

export type Context = {
  req: NextApiRequest;
  res: NextApiResponse;
  user: User | null;
};
