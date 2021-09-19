import { devtoolsExchange } from "@urql/devtools";
import { initUrqlClient } from "next-urql";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  defaultExchanges,
  fetchExchange,
  ssrExchange,
} from "urql";

const API_URL = "http://localhost:3000/api/graphql";

const client = createClient({
  url: API_URL,
  exchanges: [devtoolsExchange, ...defaultExchanges],
  requestPolicy: "network-only",
});

const getNextUrqlClient = () => {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient(
    {
      url: API_URL,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    },
    false
  );

  if (!client) throw new Error("Urql client is null");

  return { client, ssrCache };
};

export { client, getNextUrqlClient };
