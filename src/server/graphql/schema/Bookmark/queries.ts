import { CreateQueriesFn } from "../schema.types";

export const createBookmarkQueries: CreateQueriesFn = (t) => {
  t.crud.bookmark();
  t.crud.bookmarks({
    pagination: true,
    ordering: true,
    filtering: true,
  });
};
