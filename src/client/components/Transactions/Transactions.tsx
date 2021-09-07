import { Tab } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
import { Transaction } from "src/@types/Transaction";
import { formatCurrency } from "src/client/helpers/formatCurrency";

/* -------------------------------------------------------------------------- */
/*                               TransactionItem                              */
/* -------------------------------------------------------------------------- */

type TransactionItemProps = Transaction;

const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  amount,
  type,
  description,
  category,
}) => {
  return (
    <li className="p-3 pr-4 flex space-x-5 hover:ring-1 hover:ring-gray-300 rounded-xl">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-xl">
        {category.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-semibold text-gray-900 truncate">{title}</p>
          <p
            className={clsx(
              "text-sm font-semibold",
              type === "income" ? "text-green-600" : "text-red-600"
            )}
          >
            {type === "income" ? "+" : "-"}
            {formatCurrency(amount)}
          </p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-400">{description}</p>
      </div>
    </li>
  );
};

/* -------------------------------------------------------------------------- */
/*                                Transactions                                */
/* -------------------------------------------------------------------------- */

const transactionsTabs = [
  { key: "all", label: "All Transactions" },
  { key: "expenses", label: "Expenses" },
  { key: "incomes", label: "Incomes" },
];

type TransactionsProps = {
  data: Transaction[];
};

const Transactions: React.VFC<TransactionsProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <Tab.Group>
        <Tab.List className="flex space-x-8 border-b border-gray-300 overflow-hidden">
          {transactionsTabs.map((tab) => (
            <Tab
              key={tab.key}
              className={({ selected }) =>
                clsx(
                  "relative flex items-center h-12 font-medium transition-colors ease-out duration-150 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-600 before:transform before:translate-y-0.5 before:transition-transform before:ease-out before:duration-150",
                  selected
                    ? "text-blue-600 before:translate-y-0"
                    : "text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ul className="space-y-8">
              <li className="space-y-2">
                <p className="ml-3 text-sm font-medium text-gray-400">
                  Yesterday
                </p>
                <ul>
                  {data.map((transaction) => (
                    <TransactionItem key={transaction.id} {...transaction} />
                  ))}
                </ul>
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel>Expenses</Tab.Panel>
          <Tab.Panel>Incomes</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export { Transactions };
