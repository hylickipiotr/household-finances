import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../server/graphql";
import { createContext } from "../../server/graphql/context";

const apolloServer = new ApolloServer({
  schema,
  playground: true,
  context: createContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: "/api/graphql",
});
