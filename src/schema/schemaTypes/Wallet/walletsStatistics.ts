import { list, nonNull, objectType, queryField } from "nexus";

type Statistics = {
  totalAmount: number;
};

const WalletStatistics = objectType({
  name: "WalletStatistics",
  definition(t) {
    t.nonNull.field("wallet", {
      type: "Wallet",
    });
    t.nonNull.float("totalAmount");
  },
});

const walletsStatistics = queryField("walletsStatistics", {
  type: nonNull(list(nonNull(WalletStatistics))),
  args: {
    where: "WalletWhereInput",
  },
  async resolve(root, { where }, { prisma }) {
    const wallets = await prisma.wallet.findMany({
      where: where as any,
    });
    const walletsStatistics = await prisma.transaction.groupBy({
      by: ["walletId"],
      _sum: {
        amount: true,
      },
    });

    const walletsStatisticsMap: Record<
      string,
      Statistics
    > = walletsStatistics.reduce(
      (statisticsMap, { walletId, _sum }) => ({
        ...statisticsMap,
        [walletId]: { totalAmount: _sum.amount },
      }),
      {}
    );

    return wallets.map((wallet) => ({
      wallet,
      totalAmount: walletsStatisticsMap[wallet.id]?.totalAmount || 0,
    }));
  },
});

export { WalletStatistics, walletsStatistics };
