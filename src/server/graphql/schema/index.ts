import { mutationType, queryType } from "nexus";

export * from "./Transaction";

export const Query = queryType({
  definition(t) {
    t.crud.transaction();
    t.crud.transactions();
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneTransaction();
    t.crud.updateOneTransaction();
  },
});
