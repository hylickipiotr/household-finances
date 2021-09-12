import { WalletSnippetFragment } from "src/generated/graphql-urql";
import { createContext } from "src/helpers/createContext";

type WalletContextValue = WalletSnippetFragment;

const [WalletContext, useWalletContext] = createContext<WalletContextValue>();

const WalletProvider = WalletContext.Provider;

export { WalletProvider, useWalletContext };
