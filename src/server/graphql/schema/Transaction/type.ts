import { objectType } from "nexus";

export const Transaction = objectType({
  name: "Transaction",
  definition(t) {
    t.implements("Node");

    t.model.name();
    t.model.amount();
    t.model.type();
    t.model.date();
    t.model.note();
    t.model.isFavourite();
    t.model.shopId();
    t.model.categoryId();
  },
});
