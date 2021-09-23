/* eslint-disable @typescript-eslint/ban-types */
import {
  useWalletMonthlyOverviewQuery,
  WalletMonthlyOverviewSnippetFragment,
} from "src/generated/graphql-urql";
import { createContext } from "src/helpers/createContext";
import { useDateContext } from "../Date";
import { useWalletContext } from "../Wallet";

type WalletMonthlyOverviewContextValues = WalletMonthlyOverviewSnippetFragment;

const [
  WalletMonthlyOverviewContext,
  useWalletMonthlyOverviewContext,
] = createContext<WalletMonthlyOverviewContextValues>("WalletMonthlyOverview");

const WalletMonthlyOverviewProvider: React.FC = ({ children }) => {
  const wallet = useWalletContext();
  const date = useDateContext();
  const [{ data }] = useWalletMonthlyOverviewQuery({
    variables: {
      id: wallet.id,
      date: date.isoDate,
    },
  });

  return (
    <WalletMonthlyOverviewContext.Provider
      value={
        data?.walletMonthlyOverview || {
          balance: 0,
          expenses: 0,
          incomes: 0,
        }
      }
    >
      {children}
    </WalletMonthlyOverviewContext.Provider>
  );
};

export {
  WalletMonthlyOverviewContext,
  WalletMonthlyOverviewProvider,
  useWalletMonthlyOverviewContext,
};
