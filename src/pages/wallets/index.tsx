import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import { getNextUrqlClient } from "src/client/graphql/client";
import {
  useWalletsQuery,
  WalletsDocument,
} from "src/client/graphql/types.generated";
import { withUrqlClient } from "src/client/helpers/withUrqlClient";
import { WalletsLayout } from "src/client/layouts/WalletsLayout";

const Wallets: NextPage = () => {
  const [{ data }] = useWalletsQuery();

  if (!data) return null;

  return <WalletsLayout wallets={data.wallets} />;
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
