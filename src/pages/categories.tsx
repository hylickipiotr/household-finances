import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import { CategoriesProvider } from "src/contexts/Categories";
import {
  CategoriesDocument,
  SortOrder,
  useCategoriesQuery,
} from "src/generated/graphql-urql";
import { withUrqlClient } from "src/helpers/withUrqlClient";
import { CategoriesLayout } from "src/layouts/CategoriesLayout";
import { getNextUrqlClient } from "src/lib/urql/client";

const Categories: NextPage = () => {
  const [{ data }] = useCategoriesQuery({
    variables: {
      orderBy: {
        name: SortOrder.Asc,
      },
    },
  });

  if (!data) return null;

  return (
    <CategoriesProvider value={{ categories: data.categories }}>
      <CategoriesLayout />
    </CategoriesProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { client, ssrCache } = getNextUrqlClient();
  await client.query(CategoriesDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(Categories);
