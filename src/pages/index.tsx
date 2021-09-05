import { NextPage } from "next";
import React from "react";
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutWrapper,
} from "src/client/components/Layout";
import { Nav } from "src/client/components/Nav";
import { TransactionsHeader } from "src/client/components/TransactionsHeader";
import TransactionList from "src/client/components/TransactionsList/TransactionList";
import {
  SortOrder,
  useTransactionsQuery,
} from "src/client/graphql/types.generated";
import { DateProvider, useDate } from "src/contexts/date";
import tw from "tailwind-styled-components";

const StyledWrapper = tw.div`
  w-full
  max-w-xl
  space-y-3
`;

const HomePage: NextPage = () => {
  const dateContextValue = useDate();

  const [{ data }] = useTransactionsQuery({
    variables: {
      where: {
        AND: [
          {
            date: {
              gte: dateContextValue.firstDay.toISOString(),
            },
          },
          {
            date: {
              lt: dateContextValue.lastDay.toISOString(),
            },
          },
        ],
      },
      orderBy: {
        createdAt: SortOrder.Asc,
      },
    },
  });

  if (!data) return null;

  return (
    <DateProvider value={dateContextValue}>
      <Layout>
        <LayoutHeader />
        <LayoutWrapper>
          <Nav />
          <LayoutMain className="flex flex-col items-center">
            <StyledWrapper>
              <TransactionsHeader />
              <TransactionList data={data.transactions} />
            </StyledWrapper>
          </LayoutMain>
          {/* <Aside
            incomesSum={data.transactions[0].incomesSum}
            expendsSum={data.transactions[0].expendSum}
          /> */}
        </LayoutWrapper>
      </Layout>
    </DateProvider>
  );
};

export default HomePage;
