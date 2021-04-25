import { CreateMutationsFn } from "../schema.types";

export const createTransactionMutations: CreateMutationsFn = (t) => {
  t.crud.createOneTransaction();
  t.crud.updateOneTransaction();
  t.crud.deleteOneTransaction();
};
