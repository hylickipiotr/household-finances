import { Wallet } from "src/@types/Wallet";
import { createContext } from "src/client/helpers/createContext";

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
