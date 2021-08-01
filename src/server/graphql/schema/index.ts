import { list, mutationType, nonNull, queryType, stringArg } from "nexus";
import { DateEdges } from "./DateEdges/type";

export * from "./Category";
export * from "./Transaction";

export const Query = queryType({
  definition(t) {
    t.crud.transaction();
    t.crud.transactions({ filtering: true, ordering: true });
    t.crud.categories({ filtering: true });

    t.field("transactionsDateEdges", {
      type: DateEdges,
      resolve: async (_, __, { prisma }) => {
        const transactions = await prisma.transaction.findMany({
          orderBy: {
            date: "asc",
          },
        });

        if (!transactions.length) {
          return {
            min: null,
            max: null,
          };
        }

        return {
          min: transactions[0].date.toISOString(),
          max: transactions[transactions.length - 1].date.toISOString(),
        };
      },
    });

    t.field("maxDate", {
      type: "DateTime",
      resolve: async (_, __, { prisma }) => {
        const result = await prisma.transaction.findFirst({
          orderBy: {
            date: "desc",
          },
        });

        if (!result) return null;

        return result.date;
      },
    });

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
