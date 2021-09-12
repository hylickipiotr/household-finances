import { createContext } from "src/helpers/createContext";
import { Wallet } from "src/types/Wallet";

type WalletsContextValue = {
  wallets: Wallet[];
};

const [
  WalletsContext,
  useWalletsContext,
] = createContext<WalletsContextValue>();

const WalletsProvider = WalletsContext.Provider;

export { WalletsContext, WalletsProvider, useWalletsContext };
export type { WalletsContextValue };
