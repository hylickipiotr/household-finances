import * as React from "react";
import { TransactionSnippetFragment } from "src/generated/graphql-urql";
import { groupTransactionsByDate } from "src/helpers/groupTransactionsByDate";
import { TransactionsDateGroup } from "./TransactionsDateGroup";

type TransactionsDateGroupsProps = {
  transactions: TransactionSnippetFragment[];
};

const TransactionsDateGroups: React.VFC<TransactionsDateGroupsProps> = ({
  transactions,
}) => {
  const groups = groupTransactionsByDate(transactions);

  return (
    <ul className="space-y-8">
      {Object.keys(groups).map((date) => (
        <TransactionsDateGroup date={date} transactions={groups[date]} />
      ))}
    </ul>
  );
};

export { TransactionsDateGroups };
