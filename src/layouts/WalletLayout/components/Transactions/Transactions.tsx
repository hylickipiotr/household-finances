import { Tab } from "@headlessui/react";
import clsx from "clsx";
import * as React from "react";
import { TransactionSnippetFragment } from "src/generated/graphql-urql";
import { TransactionsDateGroups } from "./TransactionsDateGroups";

const transactionsTabs = [
  { key: "all", label: "All Transactions" },
  { key: "expenses", label: "Expenses" },
  { key: "incomes", label: "Incomes" },
];

type TransactionsProps = {
  data: TransactionSnippetFragment[];
};

const Transactions: React.VFC<TransactionsProps> = ({ data }) => {
  const incomes = React.useMemo(() => data.filter(({ amount }) => amount > 0), [
    data,
  ]);

  const expenses = React.useMemo(
    () => data.filter(({ amount }) => amount < 0),
    [data]
  );

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
            <TransactionsDateGroups transactions={data} />
          </Tab.Panel>
          <Tab.Panel>
            <TransactionsDateGroups transactions={expenses} />
          </Tab.Panel>
          <Tab.Panel>
            <TransactionsDateGroups transactions={incomes} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export { Transactions };
