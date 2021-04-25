import { CreateMutationsFn } from "../schema.types";

export const createCategoryMutations: CreateMutationsFn = (t) => {
  t.crud.createOneCategory();
  t.crud.updateOneCategory();
  t.crud.deleteOneCategory();
};
