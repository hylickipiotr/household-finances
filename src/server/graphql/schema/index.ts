import { mutationType, queryType } from "nexus";

export * from "./Category";
export * from "./Transaction";

export const Query = queryType({
  definition(t) {
    t.crud.transaction();
    t.crud.transactions({ filtering: true, ordering: true });
    t.crud.categories({ filtering: true });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneTransaction();
    t.crud.updateOneTransaction();
    t.crud.createOneCategory();
    t.crud.updateOneCategory();
  },
});
