import { CreateQueriesFn } from "../schema.types";

export const createShopQueries: CreateQueriesFn = (t) => {
  t.crud.shop();
  t.crud.shops({
    pagination: true,
    ordering: true,
    filtering: true,
  });
};
