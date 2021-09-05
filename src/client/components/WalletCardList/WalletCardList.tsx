import { useRouter } from "next/dist/client/router";
import React from "react";
import { Wallet } from "src/@types/Wallet";
import { WalletCard } from "../WalletCard";

type WalletCardListProps = {
  wallets: Wallet[];
};

const WalletCardList: React.VFC<WalletCardListProps> = ({ wallets }) => {
  const router = useRouter();

  const handelClick = (id: string) => {
    router.push(`/wallets/${id}`);
  };

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {wallets.map((wallet) => (
        <WalletCard key={wallet.id} {...wallet} onClick={handelClick} />
      ))}
    </ul>
  );
};

export { WalletCardList };
