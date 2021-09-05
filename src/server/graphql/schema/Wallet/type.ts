import { objectType } from "nexus";

export const Wallet = objectType({
  name: "Wallet",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.icon();
    t.model.color();
    t.model.initialBalance();
  },
});
