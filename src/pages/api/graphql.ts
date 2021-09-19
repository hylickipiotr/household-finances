import cors from "micro-cors";
import { NextApiHandler } from "next";
import { apolloServer } from "src/lib/apollo/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

let apolloServerHandler: NextApiHandler;

const getApolloServerHandler = async () => {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }

  return apolloServerHandler;
};

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  // eslint-disable-next-line consistent-return
  return apolloServerHandler(req, res);
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default cors()(handler);
