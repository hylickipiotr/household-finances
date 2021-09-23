import { mutationType } from "nexus";

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneWallet();
    t.crud.updateOneWallet();
    t.crud.deleteOneWallet();

    t.crud.createOneCategory();
    t.crud.updateOneCategory();
    t.crud.deleteOneCategory();

    t.crud.createOneTransaction();
    t.crud.updateOneTransaction();
    t.crud.deleteOneTransaction();
  },
});

export { Mutation };
