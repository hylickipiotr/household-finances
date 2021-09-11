import { WalletSnippetFragment } from "src/client/graphql/types.generated";
import { Color } from "./Color";

type WalletColor = Color;
type Wallet = WalletSnippetFragment;

export type { Wallet, WalletColor };
