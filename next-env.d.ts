/// <reference types="next" />
/// <reference types="next/types/global" />

import { PrismaClient } from ".prisma/client";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
    }

    interface Global {
      prisma: PrismaClient;
    }
  }
}
