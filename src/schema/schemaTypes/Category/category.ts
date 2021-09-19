import { objectType } from "nexus";

const Category = objectType({
  name: "Category",
  definition: (t) => {
    t.model.id();
    t.model.name();
    t.model.icon();
    t.model.type();
    t.model.strategies();
  },
});

export { Category };
