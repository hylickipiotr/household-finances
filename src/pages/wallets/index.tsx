/* eslint-disable jsx-a11y/tabindex-no-positive */
import clsx from "clsx";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import {
  IoLayersOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoWallet,
} from "react-icons/io5";
import { CreateNewWallet } from "src/client/components/CreateNewWallet";
import { WalletCardList } from "src/client/components/WalletCardList";
import { getNextUrqlClient } from "src/client/graphql/client";
import {
  useWalletsQuery,
  WalletsDocument,
} from "src/client/graphql/types.generated";
import { withUrqlClient } from "src/client/helpers/withUrqlClient";

/* -------------------------------------------------------------------------- */
/*                                    Logo                                    */
/* -------------------------------------------------------------------------- */

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-8 h-8"
  >
    <path
      fill="rgb(245, 158, 11)"
      d="M377 16c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135S451.44 16 377 16zm0 210a44.94 44.94 0 01-41.46-27.48l27.63-11.69A15 15 0 10377 166c-24.81 0-45-20.19-45-45s20.19-45 45-45a44.94 44.94 0 0141.46 27.48l-27.63 11.69A15.02 15.02 0 00362 121c0 8.27 6.73 15 15 15 24.81 0 45 20.19 45 45s-20.19 45-45 45z"
    />
    <path
      fill="rgb(37, 99, 235)"
      d="M450.04 298.94A164.01 164.01 0 01377 316c-85.92 0-156.72-66.02-164.33-150H181a147 147 0 00-60.25 12.71A104.03 104.03 0 0071.13 166H25.19l25.68 77.05A154.55 154.55 0 0044.18 256H0v120h44.09a150.44 150.44 0 0055.67 65.48 46.3 46.3 0 0121.24 39V496h90v-30h90v30h90v-15c0-25.1 8.88-49.52 25.01-68.76a149.56 149.56 0 0034.03-113.3zM151 286h-30v-30h30z"
    />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                                RightSideBar                                */
/* -------------------------------------------------------------------------- */

type NavigationItemProps = {
  icon: React.ReactNode;
  active?: boolean;
};

const NavigationItem: React.FC<NavigationItemProps> = ({ icon, active }) => (
  <li
    tabIndex={1}
    className={clsx(
      "relative flex justify-center items-center space-x-4 h-10 rounded-md hover:text-gray-700 focus:outline-none focus:text-gray-700 cursor-pointer",
      active
        ? "text-gray-700 before:absolute before:top-0 before:bottom-0 before:right-0 before:w-1 before:bg-blue-500 before:rounded-l-lg"
        : "text-gray-400"
    )}
  >
    {icon}
  </li>
);

const Navigation: React.FC = ({ children }) => (
  <ul className="mt-10 space-y-4">{children}</ul>
);

/* -------------------------------------------------------------------------- */

const RightSideBar: React.VFC = () => (
  <div className="flex-shrink-0 flex flex-col justify-between pt-14 py-8 bg-white border-r border-gray-200 w-24">
    <div className="space-y-14">
      <div className="flex justify-center">
        <Logo />
      </div>
      <Navigation>
        <NavigationItem active icon={<IoWallet className="w-5 h-5" />} />
        <NavigationItem icon={<IoLayersOutline className="w-5 h-5" />} />
      </Navigation>
    </div>
    <Navigation>
      <NavigationItem icon={<IoPersonOutline className="w-5 h-5" />} />
      <NavigationItem icon={<IoLogOutOutline className="w-5 h-5" />} />
    </Navigation>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                   Layout                                   */
/* -------------------------------------------------------------------------- */

const Layout: React.FC = ({ children }) => (
  <div className="min-h-screen h-screen w-full flex overflow-hidden">
    <RightSideBar />
    <div className="flex-1 min-h-screen overflow-y-auto px-10 py-14 bg-white max-w-screen-2xl mx-auto">
      {children}
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

const Wallets: NextPage = () => {
  const [{ data }] = useWalletsQuery();

  if (!data) return null;

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl text-gray-900">Wallets</h1>
            <p className="text-gray-400">Overview of wallets</p>
          </div>
          <CreateNewWallet />
        </div>
        <WalletCardList wallets={data?.wallets} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { client, ssrCache } = getNextUrqlClient();
  await client.query(WalletsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(Wallets);
