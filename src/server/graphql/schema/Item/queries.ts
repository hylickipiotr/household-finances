import { CreateQueriesFn } from "../schema.types";

export const createItemQueries: CreateQueriesFn = (t) => {
  t.crud.item();
  t.crud.items({
    pagination: true,
    filtering: true,
    ordering: true,
  });
};
