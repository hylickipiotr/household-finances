import { ApolloServer } from "apollo-server-micro";
import { prisma } from "src/lib/prisma";
import { schema } from "src/schema";

const apolloServer = new ApolloServer({
  schema,
  playground: true,
  context: {
    prisma,
  },
});

export { apolloServer };
