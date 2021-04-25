import { mutationType } from "nexus";
import { createBookmarkMutations } from "./Bookmark";
import { createCategoryMutations } from "./Category";
import { createItemMutations } from "./Item";
import { createShopMutations } from "./Shop";
import { createTagMutations } from "./Tag";
import { createTransactionMutations } from "./Transaction";
import { createUnitMutations } from "./Unit";

export const Mutation = mutationType({
  definition(t) {
    createCategoryMutations(t);
    createShopMutations(t);
    createTagMutations(t);
    createBookmarkMutations(t);
    createUnitMutations(t);
    createItemMutations(t);
    createTransactionMutations(t);
  },
});
