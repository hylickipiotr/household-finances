import {
  TopCategorySnippetFragment,
  useTopMonthlyWalletCategoriesQuery,
} from "src/generated/graphql-urql";
import { createContext } from "src/helpers/createContext";
import { useDateContext } from "../Date";
import { useWalletContext } from "../Wallet";

type TopCategoriesContextValues = TopCategorySnippetFragment[];

const [
  TopCategoriesContext,
  useTopCategoriesContext,
] = createContext<TopCategoriesContextValues>("TopcCategories");

const TopCategoriesProvider: React.FC = ({ children }) => {
  const wallet = useWalletContext();
  const date = useDateContext();
  const [{ data }] = useTopMonthlyWalletCategoriesQuery({
    variables: {
      walletId: wallet.id,
      date: date.isoDate,
    },
  });

  return (
    <TopCategoriesContext.Provider
      value={data?.topMonthlyWalletCategories || []}
    >
      {children}
    </TopCategoriesContext.Provider>
  );
};

export { TopCategoriesContext, TopCategoriesProvider, useTopCategoriesContext };
