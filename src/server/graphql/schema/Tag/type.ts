import { objectType } from "nexus";

export const Tag = objectType({
  name: "Tag",
  definition(t) {
    t.implements("Node");

    t.model.name();
  },
});
