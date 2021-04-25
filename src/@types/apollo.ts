import { PrismaClient } from "@prisma/client";
import { PrismaClientOptions } from "@prisma/client/runtime";

export interface Context {
  dataSources: {
    prisma: PrismaClient<PrismaClientOptions, never, undefined>;
  };
}

export type ResolverFn<T = any, A = any> = (
  parent: any,
  args: A,
  ctx: Context
) => Promise<T>;

export type ResolverMap = Record<string, Record<string, ResolverFn>>;

export interface Resolvers {
  Query: ResolverMap;
}
