import { PrismaClient } from "@prisma/client";

const getPrismaClient = () => {
  let prisma: PrismaClient;

  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }

  return prisma;
};

const prisma = getPrismaClient();

export { prisma };
