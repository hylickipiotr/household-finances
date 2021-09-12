import * as React from "react";
import { useWalletsContext } from "src/contexts/Wallets";
import { WalletCard } from "../WalletCard";

const WalletsList: React.VFC = () => {
  const { wallets } = useWalletsContext();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {wallets.map((wallet) => (
        <WalletCard key={wallet.id} {...wallet} />
      ))}
    </ul>
  );
};

export { WalletsList };
