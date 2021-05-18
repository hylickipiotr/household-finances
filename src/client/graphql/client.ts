import { devtoolsExchange } from "@urql/devtools";
import { createClient, defaultExchanges } from "urql";

export const client = createClient({
  url: "http://localhost:3000/api/graphql",
  exchanges: [devtoolsExchange, ...defaultExchanges],
  requestPolicy: "network-only",
});
