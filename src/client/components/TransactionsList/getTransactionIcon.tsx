/* eslint-disable no-useless-return */
import React from "react";
import { BiTrain } from "react-icons/bi";
import { CgHomeAlt } from "react-icons/cg";
import { FaTshirt } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { RiShoppingBasketLine, RiShoppingCartLine } from "react-icons/ri";

const IconStrategies = [
  {
    element: <RiShoppingBasketLine className="text-blue-600" />,
    strategies: [
      /biedronka/i,
      /lidl/i,
      /ca(r|rr)efour/i,
      /auchan/i,
      /lewiatan/i,
    ],
  },
  {
    element: <HiOutlineCash className="text-green-600" />,
    strategies: [
      /wynagrodzenie/i,
      /kasa/i,
      /zwrot/i,
      /cashback/i,
      /stypendium/i,
    ],
  },
  {
    element: <BiTrain className="text-red-600" />,
    strategies: [/bilet/i, /podroż/i, /ztm/i, /komunikacja/i],
  },
  {
    element: <CgHomeAlt className="text-purple-600" />,
    strategies: [/internet/i, /mieszkanie/i, /opłaty/i],
  },
  {
    element: <FaTshirt className="text-yellow-600" />,
    strategies: [/carry/i, /primark/i],
  },
] as const;

function getTransactionIcon(title: string) {
  let Icon = <RiShoppingCartLine className="text-gray-600" />;

  IconStrategies.forEach(({ element, strategies }) => {
    let match = false;
    strategies.forEach((strategy) => {
      if (strategy.test(title)) {
        match = true;
        return;
      }
    });

    if (match) {
      Icon = element;
      return;
    }
  });

  return Icon;
}

export { getTransactionIcon };
