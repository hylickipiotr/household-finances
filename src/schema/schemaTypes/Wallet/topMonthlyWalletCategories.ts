/* eslint-disable no-underscore-dangle */
import dayjs from "dayjs";
import { intArg, list, nonNull, queryField, stringArg } from "nexus";
import { getLastDayMonth } from "src/helpers/getLastDayMonth";
import { TopCategory } from "../Category/TopCategory";

const topMonthlyWalletCategories = queryField("topMonthlyWalletCategories", {
  type: list(nonNull(TopCategory)),
  args: {
    walletId: nonNull(stringArg()),
    date: nonNull(stringArg()),
    take: intArg(),
  },
  async resolve(_, { walletId, date, take }, { prisma }) {
    const totalAmountCategories = await prisma.transaction.groupBy({
      by: ["categoryId"],
      where: {
        AND: [
          { walletId },
          {
            amount: {
              lt: 0,
            },
          },
          {
            date: {
              gte: dayjs(date).format("YYYY-MM-01T00:00:00Z"),
              lte: dayjs(date).format(
                `YYYY-MM-${getLastDayMonth(
                  dayjs(date).year(),
                  dayjs(date).month()
                )}T23:59:59Z`
              ),
            },
          },
        ],
      },
      _sum: {
        amount: true,
      },
      _count: {
        _all: true,
      },
    });

    if (!totalAmountCategories.length) return [];

    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: [...totalAmountCategories.map((category) => category.categoryId)],
        },
        type: {
          equals: "EXPENSE",
        },
      },
    });

    return categories
      .map((category) => {
        const totalAmountCategory = totalAmountCategories.find(
          ({ categoryId }) => categoryId === category.id
        );
        return {
          category,
          amount: totalAmountCategory?._sum.amount || 0,
          transactionsCount: totalAmountCategory?._count._all || 0,
        };
      })
      .slice(0, take || 5);
  },
});

export { topMonthlyWalletCategories };
