import { objectType } from "nexus";

export const Transaction = objectType({
  name: "Transaction",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.amount();
    t.model.date();
    t.model.isIncome();
    t.model.category();

    t.model.createdAt();
    t.model.updatedAt();
  },
});
