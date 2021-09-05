type WalletColor = "gray" | "blue";
type Wallet = {
  id: string;
  name: string;
  icon: string;
  color: WalletColor;
  totalAmount: number;
  initialBalance: number;
};

export type { Wallet, WalletColor };
