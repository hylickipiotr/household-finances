import { queryType } from "nexus";

const Query = queryType({
  definition(t) {
    t.crud.wallets();
    t.crud.wallet();

    t.crud.categories({
      filtering: true,
      ordering: true,
    });
    t.crud.category();

    t.crud.transactions({
      filtering: true,
      ordering: true,
    });
    t.crud.transaction();
  },
});

export { Query };
