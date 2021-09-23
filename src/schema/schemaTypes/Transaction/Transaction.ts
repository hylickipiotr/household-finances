import { objectType } from "nexus";

const Transaction = objectType({
  name: "Transaction",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.amount();
    t.model.date();
    t.model.category();
    t.model.wallet();
    t.model.description();
  },
});

export { Transaction };
