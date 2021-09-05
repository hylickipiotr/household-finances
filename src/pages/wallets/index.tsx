import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { CreateNewWallet } from "src/client/components/CreateNewWallet";
import { Layout } from "src/client/components/Layout";
import { WalletCardList } from "src/client/components/WalletCardList";
import { getNextUrqlClient } from "src/client/graphql/client";
import {
  useWalletsQuery,
  WalletsDocument,
} from "src/client/graphql/types.generated";
import { withUrqlClient } from "src/client/helpers/withUrqlClient";

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
