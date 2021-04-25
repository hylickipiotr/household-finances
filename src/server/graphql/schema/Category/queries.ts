import { CreateQueriesFn } from "../schema.types";

export const createCategoryQueries: CreateQueriesFn = (t) => {
  t.crud.category();
  t.crud.categories({
    pagination: true,
    ordering: true,
    filtering: true,
  });
};
