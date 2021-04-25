import { objectType } from "nexus";
import { Node } from "../Node";

export const Shop = objectType({
  name: "Shop",
  definition(t) {
    t.implements(Node);

    t.model.name();
    t.model.logoUrl();
    t.model.isFavourite();
    t.model.categoryId();
  },
});
