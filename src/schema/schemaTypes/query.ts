import { queryType } from "nexus";

const Query = queryType({
  definition(t) {
    t.crud.wallets();
    t.crud.wallet();
  },
});

export { Query };
