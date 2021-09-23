import * as React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { RiPieChart2Fill } from "react-icons/ri";
import { OverviewCard } from "./OverviewCard";

type WalletOverviewProps = {
  incomes?: number;
  expenses?: number;
  balance?: number;
};

const WalletOverview: React.VFC<WalletOverviewProps> = (props) => {
  const { incomes = 0, expenses = 0, balance = 0 } = props;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <OverviewCard
          label="Monthly Balance"
          icon={<RiPieChart2Fill />}
          amount={balance}
          color="purple"
        />
        <OverviewCard
          label="Monthly Incomes"
          icon={<HiTrendingUp />}
          amount={incomes}
          color="green"
        />
        <OverviewCard
          label="Monthly Expenses"
          icon={<HiTrendingDown />}
          amount={-expenses}
          color="red"
        />
      </div>
    </div>
  );
};

export { WalletOverview };
