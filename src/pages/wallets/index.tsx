import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import {
  useWalletsStatisticsQuery,
  WalletsStatisticsDocument,
} from "src/generated/graphql-urql";
import { withUrqlClient } from "src/helpers/withUrqlClient";
import { WalletsLayout } from "src/layouts/WalletsLayout";
import { getNextUrqlClient } from "src/lib/urql/client";

const Wallets: NextPage = () => {
  const [{ data }] = useWalletsStatisticsQuery();

  if (!data) return null;

  return <WalletsLayout wallets={data.walletsStatistics} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { client, ssrCache } = getNextUrqlClient();
  await client.query(WalletsStatisticsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(Wallets);
