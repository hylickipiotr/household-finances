import * as React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { RiPieChart2Fill } from "react-icons/ri";
import { OverviewCard } from "./OverviewCard";

type WalletOverviewProps = {
  totalIncomes: number;
  totalExpenses: number;
};

const WalletOverview: React.VFC<WalletOverviewProps> = ({
  totalIncomes,
  totalExpenses,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <OverviewCard
          label="Total Balance"
          icon={<RiPieChart2Fill />}
          amount={totalIncomes - totalExpenses}
          color="purple"
        />
        <OverviewCard
          label="Total Incomes"
          icon={<HiTrendingUp />}
          amount={totalIncomes}
          color="green"
        />
        <OverviewCard
          label="Total Expenses"
          icon={<HiTrendingDown />}
          amount={-totalExpenses}
          color="red"
        />
      </div>
    </div>
  );
};

export { WalletOverview };
