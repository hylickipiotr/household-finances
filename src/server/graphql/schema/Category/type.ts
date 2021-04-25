import { objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.implements("Node");

    t.model.name();
    t.model.icon();
  },
});
