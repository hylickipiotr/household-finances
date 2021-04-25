import { objectType } from "nexus";
import { Node } from "../Node";

export const Bookmark = objectType({
  name: "Bookmark",
  definition(t) {
    t.implements(Node);

    t.model.name();
    t.model.icon();
    t.model.color();
    t.model.query();
    t.model.isFavourite();
    t.model.sort();
  },
});
