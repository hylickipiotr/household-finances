import { CreateMutationsFn } from "../schema.types";

export const createBookmarkMutations: CreateMutationsFn = (t) => {
  t.crud.createOneBookmark();
  t.crud.updateOneBookmark();
  t.crud.deleteOneBookmark();
};
