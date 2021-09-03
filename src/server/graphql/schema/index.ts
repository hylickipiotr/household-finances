import { list, mutationType, nonNull, queryType, stringArg } from "nexus";

export * from "./Category";
export * from "./Transaction";

export const Query = queryType({
  definition(t) {
    t.crud.transaction();
    t.crud.transactions({
      type: "TransactionsExtended" as any,
      filtering: true,
      ordering: true,
      resolve: async (root, args, ctx, info, originalResolve): Promise<any> => {
        const res = await originalResolve(root, args, ctx, info);
        console.log(res);
        return [
          {
            nodes: res,
            incomesSum:
              Math.round(
                res.reduce(
                  (s, { isIncome, amount }) => (isIncome ? s + amount : s),
                  0
                ) * 100
              ) / 100,
            expendSum:
              Math.round(
                res.reduce(
                  (s, { isIncome, amount }) => (!isIncome ? s + amount : s),
                  0
                ) * 100
              ) / 100,
          },
        ];
      },
    });
    t.crud.categories({ filtering: true });

    t.field("suggestTransactionTitle", {
      type: list("String"),
      args: {
        query: nonNull(stringArg()),
      },
      resolve: async (_, { query }, { prisma }) => {
        const result = await prisma.transaction.groupBy({
          by: ["title"],
          where: {
            title: {
              contains: query,
            },
          },
          count: true,
          orderBy: {
            title: "asc",
          },
          take: 10,
        });

        return result
          .sort((a, b) => (b.count as any) - (a.count as any))
          .map(({ title }) => title);
      },
    });
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneTransaction();
    t.crud.updateOneTransaction();
    t.crud.createOneCategory();
    t.crud.updateOneCategory();
  },
});
