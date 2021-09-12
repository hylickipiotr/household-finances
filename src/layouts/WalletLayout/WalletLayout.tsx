import * as React from "react";
import { RiAddLine } from "react-icons/ri";
import { Layout } from "src/components/Layout";
import { PageHeader } from "src/components/PageHeader";
import { useWalletContext } from "src/contexts/Wallet";
import { TopCategory } from "src/types/Category";
import { Transaction } from "src/types/Transaction";
import { ActionsDropdown } from "./components/ActionsDropdown";
import { TopCategories } from "./components/TopCategories";
import { Transactions } from "./components/Transactions";
import { WalletOverview } from "./components/WalletOverview";

const transactions: Transaction[] = [
  {
    id: "5934daf7-f0eb-418e-9d06-c45b4ce50b07",
    title: "Biedronka",
    amount: 12.22,
    date: "",
    description: "Consequat deserunt amet amet anim irure labore et excepteur",
    type: "expense",
    category: {
      icon: "🥑",
    },
  },
  {
    id: "46738d89-b8c3-4c62-8bb9-6a30fbc7446c",
    title: "Lidl",
    amount: 54.12,
    date: "",
    description: "",
    type: "expense",
    category: {
      icon: "🥑",
    },
  },
  {
    id: "06766da6-ae2b-41d7-b248-1d32020bff2a",
    title: "Pensja",
    amount: 1000,
    date: "",
    description: "Moja praca",
    type: "income",
    category: {
      icon: "🖥",
    },
  },
];

const topCategories: TopCategory[] = [
  {
    id: "35c85946-3d14-4d6b-b7b0-603837516309",
    icon: "👕",
    name: "Clothes",
    totalAmount: 576.67,
    transactionCount: 2,
  },
  {
    id: "2498f18d-4cad-4dc4-a0f8-f2aa96b89a1a",
    icon: "💊",
    name: "Medicals",
    totalAmount: 176.48,
    transactionCount: 3,
  },
  {
    id: "4654b028-a20e-43e8-81d6-44a3f01d64de",
    icon: "🍎",
    name: "Food",
    totalAmount: 144.21,
    transactionCount: 6,
  },
];

const WalletLayout: React.VFC = () => {
  const wallet = useWalletContext();

  return (
    <Layout>
      <div className="space-y-8">
        <PageHeader
          title={wallet.name}
          backPath="/wallets"
          description="Overview of wallet"
          actionsDropdown={<ActionsDropdown />}
        >
          <div className="flex space-x-3">
            <input
              type="month"
              value="2021-09"
              className="flex items-center justify-between px-5 w-64 h-12 text-lg capitalize bg-white font-semibold text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring"
            />
            <button
              type="button"
              className="flex items-center space-x-3 px-6 h-12 bg-blue-600 font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring"
            >
              <RiAddLine />
              <p className="text-base">Add transaction</p>
            </button>
          </div>
        </PageHeader>
        <WalletOverview totalIncomes={8000} totalExpenses={3078.78} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Transactions data={transactions} />
          <TopCategories data={topCategories} />
        </div>
      </div>
    </Layout>
  );
};

export { WalletLayout };
