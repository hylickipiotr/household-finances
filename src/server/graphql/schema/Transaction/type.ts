import { objectType } from "nexus";

export const Transaction = objectType({
  name: "Transaction",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.amount();
    t.model.date();
    t.model.type();
    t.model.isFavourite();
    t.model.note();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
