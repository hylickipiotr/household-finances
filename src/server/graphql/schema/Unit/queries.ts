import { CreateQueriesFn } from "../schema.types";

export const createUnitQueries: CreateQueriesFn = (t) => {
  t.crud.unit();
  t.crud.units({
    pagination: true,
    filtering: true,
    ordering: true,
  });
};
