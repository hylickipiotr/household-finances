import { WalletStatisticsSnippetFragment } from "src/generated/graphql-urql";
import { createContext } from "src/helpers/createContext";

type WalletsContextValue = WalletStatisticsSnippetFragment[];

const [WalletsContext, useWalletsContext] = createContext<WalletsContextValue>(
  "Wallets"
);

const WalletsProvider = WalletsContext.Provider;

export { WalletsContext, WalletsProvider, useWalletsContext };
export type { WalletsContextValue };
