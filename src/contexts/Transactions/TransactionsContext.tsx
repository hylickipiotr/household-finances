import dayjs from "dayjs";
import {
  SortOrder,
  TransactionSnippetFragment,
  useTransactionsQuery,
} from "src/generated/graphql-urql";
import { createContext } from "src/helpers/createContext";
import { getLastDayMonth } from "src/helpers/getLastDayMonth";
import { useDateContext } from "../Date";
import { useWalletContext } from "../Wallet";

type TransactionsContextValue = {
  transactions: TransactionSnippetFragment[];
};

const [
  TransactionsContext,
  useTransactionsContext,
] = createContext<TransactionsContextValue>("Transactions");

const TransactionProvider: React.FC = (props) => {
  const { children } = props;
  const wallet = useWalletContext();
  const date = useDateContext();

  const [{ data }] = useTransactionsQuery({
    variables: {
      orderBy: {
        date: SortOrder.Desc,
      },
      where: {
        AND: [
          {
            walletId: {
              equals: wallet.id,
            },
            date: {
              gte: dayjs.utc([date.year, date.month] as any).format(),
              lte: dayjs
                .utc([
                  date.year,
                  date.month,
                  getLastDayMonth(date.year, date.month),
                  23,
                  59,
                  59,
                ] as any)
                .format(),
            },
          },
        ],
      },
    },
  });

  return (
    <TransactionsContext.Provider
      value={{
        transactions: data?.transactions || [],
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export { TransactionsContext, TransactionProvider, useTransactionsContext };
