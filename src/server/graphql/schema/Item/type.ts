import { objectType } from "nexus";

export const Item = objectType({
  name: "Item",
  definition(t) {
    t.implements("Node");

    t.model.name();
    t.model.amount();
    t.model.quantity();
    t.model.unitId();
    t.model.transactionId();
  },
});
