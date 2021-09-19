import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import { WalletProvider } from "src/contexts/Wallet";
import { useWalletQuery, WalletDocument } from "src/generated/graphql-urql";
import { withUrqlClient } from "src/helpers/withUrqlClient";
import { WalletLayout } from "src/layouts/WalletLayout";
import { getNextUrqlClient } from "src/lib/urql/client";

type WalletPageProps = {
  id: string;
};

const WalletPage: NextPage<WalletPageProps> = ({ id }) => {
  const [{ data }] = useWalletQuery({ variables: { id } });

  if (!data || !data.wallet) return null;

  return (
    <WalletProvider value={data.wallet}>
      <WalletLayout />
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
