import { nonNull, objectType } from "nexus";

const TopCategory = objectType({
  name: "TopCategory",
  definition(t) {
    t.field("category", {
      type: nonNull("Category"),
    });
    t.field("amount", {
      type: nonNull("Float"),
    });
    t.field("transactionsCount", {
      type: nonNull("Int"),
    });
  },
});

export { TopCategory };
