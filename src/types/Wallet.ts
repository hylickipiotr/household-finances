import { WalletSnippetFragment } from "src/generated/graphql-urql";
import { Color } from "./Color";

type WalletColor = Color;
type Wallet = WalletSnippetFragment;

export type { Wallet, WalletColor };
