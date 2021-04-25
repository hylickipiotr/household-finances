import { objectType } from "nexus";

export const Unit = objectType({
  name: "Unit",
  definition(t) {
    t.implements("Node");

    t.model.name();
  },
});
