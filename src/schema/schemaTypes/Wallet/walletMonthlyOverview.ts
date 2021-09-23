import dayjs from "dayjs";
import { nonNull, objectType, queryField, stringArg } from "nexus";
import { getLastDayMonth } from "src/helpers/getLastDayMonth";

const WalletMonthlyOverview = objectType({
  name: "WalletMonthlyOverview",
  definition(t) {
    t.nonNull.float("incomes");
    t.nonNull.float("expenses");
    t.nonNull.float("balance");
  },
});

const walletMonthlyOverview = queryField("walletMonthlyOverview", {
  type: nonNull(WalletMonthlyOverview),
  args: {
    id: nonNull(stringArg()),
    date: nonNull(stringArg()),
  },
  async resolve(root, { id, date }, { prisma }) {
    const transactions = await prisma.transaction.findMany({
      where: {
        AND: [
          { walletId: id },
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
    });
    const incomes = transactions.reduce(
      (sum, { amount }) => (amount > 0 ? sum + amount : sum),
      0
    );
    const expenses = transactions.reduce(
      (sum, { amount }) => (amount < 0 ? sum + Math.abs(amount) : sum),
      0
    );
    const balance = incomes - expenses;
    return {
      incomes,
      expenses,
      balance,
    };
  },
});

export { WalletMonthlyOverview, walletMonthlyOverview };
