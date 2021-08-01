import { objectType } from "nexus";

export const DateEdges = objectType({
  name: "DateEdges",
  definition(t) {
    t.string("min");
    t.string("max");
  },
});
