import dayjs from "dayjs";
import * as React from "react";
import { TransactionSnippetFragment } from "src/generated/graphql-urql";
import { TransactionItem } from "./TransactionItem";

type TransactionsDateGroupProps = {
  date: string;
  transactions: TransactionSnippetFragment[];
};

const TransactionsDateGroup: React.VFC<TransactionsDateGroupProps> = ({
  date,
  transactions,
}) => {
  const isToday = dayjs(date).isSame(dayjs(), "day");
  const isYesterday = dayjs(date).isSame(dayjs().subtract(1, "day"), "day");

  return (
    <li className="space-y-3">
      <p className="text-sm font-medium text-gray-400">
        {isToday && "Today"}
        {isYesterday && "Yesterday"}
        {!isToday && !isYesterday && dayjs(date).format("D MMMM")}
      </p>
      <ul className="space-y-4 divide-y">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </ul>
    </li>
  );
};

export { TransactionsDateGroup };
