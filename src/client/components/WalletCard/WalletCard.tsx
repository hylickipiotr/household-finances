import clsx from "clsx";
import React from "react";
import { Wallet, WalletColor } from "src/@types/Wallet";
import { formatCurrency } from "src/client/helpers/formatCurrency";

type WalletCardProps = Wallet & {
  onClick?: (id: string, event: React.MouseEvent<HTMLLIElement>) => void;
};

const getColorCls = (color: WalletColor) => {
  switch (color) {
    case "blue":
      return "before:bg-blue-600";
    default:
      return "before:bg-gray-500";
  }
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

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    onClick?.(id, e);
  };

  return (
    <li
      className={clsx(
        "relative flex flex-col justify-between w-full h-48 p-8 bg-gray-100 border border-gray-200 rounded-xl overflow-hidden before:absolute before:left-0 before:bottom-0 before:w-full before:h-2.5 before:transform before:translate-y-1 before:transition-transform before:ease-in-out before:duration-150 hover:before:translate-y-0 focus:outline-none focus:before:translate-y-0",
        onClick && "cursor-pointer",
        colorCls
      )}
      onClick={handleClick}
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
  );
};

export { WalletCard };
