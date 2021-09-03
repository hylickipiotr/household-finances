import numeral from "numeral";
import React from "react";
import { HiCalculator, HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { AsideCard, AsideCardIcon, AsideCardValue } from "./AsideCard";
import { AsideDivider } from "./AsideDivider";

interface AsideProps {
  incomesSum: number;
  expendsSum: number;
}

const Aside: React.FC<AsideProps> = ({ incomesSum, expendsSum }) => {
  const balance = incomesSum - expendsSum;

  const formattedBalance = `${balance > 0 ? "+" : ""}${numeral(balance).format(
    `0,0.00`
  )} zł`;

  const formattedIncomesSum = `${incomesSum > 0 ? "+" : ""}${numeral(
    incomesSum
  ).format(`0,0.00`)} zł`;

  const formattedExpendsSum = `${expendsSum > 0 ? "-" : ""}${numeral(
    expendsSum
  ).format(`0,0.00`)} zł`;

  return (
    <aside className="w-64 bg-gray-100 py-6 pl-4 pr-10 space-y-2">
      <h2 className="text-gray-900 text-base leading-6 font-semibold">
        Podsumowanie
      </h2>
      <div className="space-y-3">
        <AsideCard
          title="Bilans"
          icon={
            <AsideCardIcon>
              <HiCalculator className="text-blue-500" />
            </AsideCardIcon>
          }
          value={
            <AsideCardValue className="text-gray-900">
              {formattedBalance}
            </AsideCardValue>
          }
        />
        <AsideDivider />
        <div className="space-y-2">
          <AsideCard
            title="Przychody"
            icon={
              <AsideCardIcon>
                <HiTrendingUp className="text-green-500" />
              </AsideCardIcon>
            }
            value={
              <AsideCardValue className="text-green-700">
                {formattedIncomesSum}
              </AsideCardValue>
            }
          />
          <AsideCard
            title="Wydatki"
            icon={
              <AsideCardIcon>
                <HiTrendingDown className="text-red-500" />
              </AsideCardIcon>
            }
            value={
              <AsideCardValue className="text-red-700">
                {formattedExpendsSum}
              </AsideCardValue>
            }
          />
        </div>
      </div>
    </aside>
  );
};

export { Aside };
