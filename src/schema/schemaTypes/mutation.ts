import { mutationType } from "nexus";

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneWallet();
    t.crud.updateOneWallet();
    t.crud.deleteOneWallet();
  },
});

export { Mutation };
