import { mutationType, queryType } from "nexus";

export * from "./Wallet";

export const Query = queryType({
  definition(t) {
    t.crud.wallets();
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneWallet();
    t.crud.updateOneWallet();
  },
});
