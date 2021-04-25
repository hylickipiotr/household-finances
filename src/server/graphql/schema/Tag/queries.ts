import { CreateQueriesFn } from "../schema.types";

export const createTagQueries: CreateQueriesFn = (t) => {
  t.crud.tag();
  t.crud.tags({
    pagination: true,
    filtering: true,
    ordering: true,
  });
};
