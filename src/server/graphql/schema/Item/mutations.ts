import { CreateMutationsFn } from "../schema.types";

export const createItemMutations: CreateMutationsFn = (t) => {
  t.crud.createOneItem();
  t.crud.updateOneItem();
  t.crud.deleteOneItem();
};
