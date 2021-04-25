import { CreateMutationsFn } from "../schema.types";

export const createShopMutations: CreateMutationsFn = (t) => {
  t.crud.createOneShop();
  t.crud.updateOneShop();
  t.crud.deleteOneShop();
};
