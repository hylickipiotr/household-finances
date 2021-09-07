import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import {
  RiAddLine,
  RiArchiveLine,
  RiArrowLeftSLine,
  RiDeleteBinLine,
  RiEdit2Line,
  RiMoreFill,
} from "react-icons/ri";
import { TopCategory } from "src/@types/Category";
import { Transaction } from "src/@types/Transaction";
import { Layout } from "src/client/components/Layout";
import { TopCategories } from "src/client/components/TopCategories";
import { Transactions } from "src/client/components/Transactions";
import { WalletOverview } from "src/client/components/WalletOverview/WalletOverview";
import { useWalletContext, WalletProvider } from "src/client/contexts/Wallet";
import { getNextUrqlClient } from "src/client/graphql/client";
import {
  useDeleteWalletMutation,
  useWalletQuery,
  WalletDocument,
} from "src/client/graphql/types.generated";
import { withUrqlClient } from "src/client/helpers/withUrqlClient";

/* -------------------------------------------------------------------------- */
/*                                 BackButton                                 */
/* -------------------------------------------------------------------------- */

const BackButton: React.VFC = () => {
  return (
    <Link href="/wallets">
      <button
        type="button"
        className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-900 rounded-full focus:outline-none focus:ring"
      >
        <RiArrowLeftSLine className="w-6 h-6" />
      </button>
    </Link>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 MoreButton                                 */
/* -------------------------------------------------------------------------- */

const MoreButton: React.VFC = () => {
  const { id, name } = useWalletContext();
  const router = useRouter();
  const [, deleteWallet] = useDeleteWalletMutation();

  const handleDelete = async () => {
    const answer = window.confirm(`Are you sure to delete wallet ${name}`);
    if (!answer) return;

    try {
      await deleteWallet({
        id,
      });
      router.replace("/wallets");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-8 h-8 flex items-center justify-center text-gray-400 rounded-md transition-color ease-out duration-75 hover:text-gray-900 focus:outline-none focus:ring">
        <RiMoreFill className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-48 py-1.5 bg-white shadow-3xl rounded-lg"
      >
        <DropdownMenuItem className="flex px-4 h-9 items-center space-x-3 bg-white text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none">
          <RiEdit2Line />
          <p>Edit wallet</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="w-11/12 h-px mx-auto my-1.5 bg-gray-300" />
        <DropdownMenuItem className="flex px-4 h-9 items-center space-x-3 bg-white text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none">
          <RiArchiveLine />
          <p>Archive wallet</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex px-4 h-9 items-center space-x-3 bg-white text-gray-900 cursor-pointer hover:bg-gray-200 focus:outline-none"
          onSelect={handleDelete}
        >
          <RiDeleteBinLine />
          <p>Delete wallet</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Overview                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

type WalletPageProps = {
  id: string;
};

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

const WalletPage: NextPage<WalletPageProps> = ({ id }) => {
  const [{ data }] = useWalletQuery({ variables: { id } });

  if (!data || !data.wallet) return null;

  return (
    <WalletProvider value={data.wallet}>
      <Layout>
        <div className="space-y-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6">
              <BackButton />
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <h1 className="text-3xl text-gray-900">{data.wallet.name}</h1>
                  <MoreButton />
                </div>
                <p className="text-gray-400">Overview of wallet</p>
              </div>
            </div>
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
          </div>
          <WalletOverview totalIncomes={8000} totalExpenses={3078.78} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Transactions data={transactions} />
            <TopCategories data={topCategories} />
          </div>
        </div>
      </Layout>
    </WalletProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (req) => {
  const id = req.query.id as string;
  const { client, ssrCache } = getNextUrqlClient();
  const result = await client.query(WalletDocument, { id }).toPromise();

  if (!result.data.wallet) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(WalletPage);
