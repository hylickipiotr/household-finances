import { CreateQueriesFn } from "../schema.types";

export const createTransactionQueries: CreateQueriesFn = (t) => {
  t.crud.transaction();
  t.crud.transactions({
    pagination: true,
    filtering: true,
    ordering: true,
  });
};
