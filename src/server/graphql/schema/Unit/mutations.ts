import { CreateMutationsFn } from "../schema.types";

export const createUnitMutations: CreateMutationsFn = (t) => {
  t.crud.createOneUnit();
  t.crud.updateOneUnit();
  t.crud.deleteOneUnit();
};
