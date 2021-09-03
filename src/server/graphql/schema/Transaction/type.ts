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

export const TransactionsExtended = objectType({
  name: "TransactionsExtended",
  definition(t) {
    t.nonNull.list.field("nodes", {
      type: "Transaction",
    });
    t.nonNull.float("incomesSum");
    t.nonNull.float("expendSum");
  },
});
