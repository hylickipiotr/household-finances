import clsx from "clsx";
import * as React from "react";
import { cloneNode } from "src/client/helpers/cloneNode";
import { formatCurrency } from "src/client/helpers/formatCurrency";

type OverviewCardIconColor = "gray" | "red" | "purple" | "green";

type OverviewCardProps = {
  label: string;
  amount: number;
  icon: React.ReactNode;
  color: OverviewCardIconColor;
};

const classes = {
  icon: {
    color: {
      red: "text-red-500",
      purple: "text-purple-500",
      green: "text-green-500",
      gray: "text-gray-500",
    },
  },
};

const OverviewCard: React.VFC<OverviewCardProps> = ({
  label,
  amount,
  icon,
  color,
}) => {
  return (
    <div className="flex flex-col justify-between h-40 p-6 bg-white border border-gray-300 rounded-xl">
      <i className={classes.icon.color[color]}>
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

export { OverviewCard };
