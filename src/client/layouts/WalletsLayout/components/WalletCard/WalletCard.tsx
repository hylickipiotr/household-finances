import clsx from "clsx";
import Link from "next/link";
import * as React from "react";
import { Wallet, WalletColor } from "src/@types/Wallet";
import { formatCurrency } from "src/client/helpers/formatCurrency";

const getColorCls = (color: WalletColor) => {
  switch (color) {
    case "blue":
      return "before:bg-blue-600";
    case "green":
      return "before:bg-green-600";
    case "indigo":
      return "before:bg-indigo-600";
    case "orange":
      return "before:bg-yellow-600";
    case "pink":
      return "before:bg-pink-600";
    case "purple":
      return "before:bg-purple-600";
    case "yellow":
      return "before:bg-yellow-300";
    default:
      return "before:bg-gray-500";
  }
};

/* -------------------------------------------------------------------------- */

type WalletCardProps = Wallet & {
  onClick?: (id: string, event: React.MouseEvent<HTMLLIElement>) => void;
};

const WalletCard: React.VFC<WalletCardProps> = ({
  id,
  name,
  icon,
  color,
  initialBalance,
  onClick,
}) => {
  const colorCls = getColorCls(color as WalletColor);
  const walletPath = `/wallets/${id}`;

  return (
    <Link href={walletPath}>
      <li
        className={clsx(
          "relative flex flex-col justify-between w-full h-48 p-8 bg-gray-100 border border-gray-200 rounded-xl overflow-hidden before:absolute before:left-0 before:bottom-0 before:w-full before:h-2.5 before:transform before:translate-y-1 before:transition-transform before:ease-in-out before:duration-150 hover:before:translate-y-0 focus:outline-none focus:before:translate-y-0",
          onClick && "cursor-pointer",
          colorCls
        )}
        tabIndex={0}
      >
        <div className="flex justify-between">
          <span role="img" aria-label="koala" className="block text-5xl">
            {icon}
          </span>
          <div className="text-lg text-gray-500 font-finance">
            {formatCurrency(initialBalance)}
          </div>
        </div>
        <p className="text-3xl text-gray-900 font-semibold truncate">{name}</p>
      </li>
    </Link>
  );
};

export { WalletCard };
