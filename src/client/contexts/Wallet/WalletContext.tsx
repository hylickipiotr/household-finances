import { WalletSnippetFragment } from "src/client/graphql/types.generated";
import { createContext } from "src/client/helpers/createContext";

type WalletContextValue = WalletSnippetFragment;

const [WalletContext, useWalletContext] = createContext<WalletContextValue>();

const WalletProvider = WalletContext.Provider;

export { WalletProvider, useWalletContext };
