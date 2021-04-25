import { queryType } from "nexus";
import { createBookmarkQueries } from "./Bookmark";
import { createCategoryQueries } from "./Category";
import { createItemQueries } from "./Item";
import { createShopQueries } from "./Shop";
import { createTagQueries } from "./Tag";
import { createTransactionQueries } from "./Transaction";
import { createUnitQueries } from "./Unit";

export const Query = queryType({
  definition(t) {
    createCategoryQueries(t);
    createShopQueries(t);
    createTagQueries(t);
    createBookmarkQueries(t);
    createUnitQueries(t);
    createItemQueries(t);
    createTransactionQueries(t);
  },
});
