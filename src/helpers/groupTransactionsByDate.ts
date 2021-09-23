import dayjs from "dayjs";
import { TransactionSnippetFragment } from "src/generated/graphql-urql";

function groupTransactionsByDate<
  T extends TransactionSnippetFragment = TransactionSnippetFragment
>(transactions: T[]): { [k: string]: T[] } {
  return transactions.reduce<Record<string, T[]>>((acc, transaction) => {
    const date = dayjs(transaction.date).format("YYYY-MM-DD");
    return {
      ...acc,
      [date]: acc[date] ? [...acc[date], transaction] : [transaction],
    };
  }, {});
}

export { groupTransactionsByDate };
