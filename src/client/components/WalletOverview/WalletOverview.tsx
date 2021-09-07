import clsx from "clsx";
import React from "react";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { RiPieChart2Fill } from "react-icons/ri";
import { cloneNode } from "src/client/helpers/cloneNode";
import { formatCurrency } from "src/client/helpers/formatCurrency";

/* -------------------------------------------------------------------------- */
/*                                OverviewCard                                */
/* -------------------------------------------------------------------------- */

type OverviewCardIconColor = "gray" | "red" | "purple" | "green";

const getOverviewCardIconColorCls = (color: OverviewCardIconColor) => {
  switch (color) {
    case "red":
      return "text-red-500";
    case "purple":
      return "text-purple-500";
    case "green":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

type OverviewCardProps = {
  label: string;
  amount: number;
  icon: React.ReactNode;
  color: OverviewCardIconColor;
};

const OverviewCard: React.VFC<OverviewCardProps> = ({
  label,
  amount,
  icon,
  color,
}) => {
  return (
    <div className="flex flex-col justify-between h-40 p-6 bg-white border border-gray-300 rounded-xl">
      <i className={getOverviewCardIconColorCls(color)}>
        {cloneNode(icon, { className: "w-8 h-8 " })}
      </i>
      <div className="space-y-1">
        <p className={clsx("text-xl text-gray-900 font-bold")}>
          {amount > 0 && "+"}
          {formatCurrency(amount)}
        </p>
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               WalletOverview                               */
/* -------------------------------------------------------------------------- */

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
