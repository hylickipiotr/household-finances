import { CreateMutationsFn } from "../schema.types";

export const createTagMutations: CreateMutationsFn = (t) => {
  t.crud.createOneTag();
  t.crud.updateOneTag();
  t.crud.deleteOneTag();
};
