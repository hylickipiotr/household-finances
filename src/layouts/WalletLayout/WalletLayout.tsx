import * as React from "react";
import { IoBagAddSharp } from "react-icons/io5";
import { Button } from "src/components/Button";
import { Layout } from "src/components/Layout";
import { PageHeader } from "src/components/PageHeader";
import { useTopCategoriesContext } from "src/contexts/TopCategories";
import { useTransactionsContext } from "src/contexts/Transactions";
import { useWalletContext } from "src/contexts/Wallet";
import { useWalletMonthlyOverviewContext } from "src/contexts/WalletMonthlyOverview";
import { ActionsDropdown } from "./components/ActionsDropdown";
import { DateNavigator } from "./components/DateNavigator";
import { TopCategories } from "./components/TopCategories";
import { Transactions } from "./components/Transactions";
import { WalletOverview } from "./components/WalletOverview";

const WalletLayout: React.VFC = () => {
  const wallet = useWalletContext();
  const { transactions } = useTransactionsContext();
  const topCategories = useTopCategoriesContext();
  const monthlyOverview = useWalletMonthlyOverviewContext();

  return (
    <Layout>
      <div className="space-y-8">
        <PageHeader
          title={wallet.name}
          description="Overview of wallet"
          actionsDropdown={<ActionsDropdown />}
        >
          <div className="flex space-x-3">
            <DateNavigator />
            <Button iconBefore={<IoBagAddSharp />} type="primary">
              Add transaction
            </Button>
          </div>
        </PageHeader>
        <WalletOverview
          incomes={monthlyOverview.incomes}
          expenses={monthlyOverview?.expenses}
          balance={monthlyOverview?.balance}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Transactions data={transactions} />
          <TopCategories categories={topCategories} />
        </div>
      </div>
    </Layout>
  );
};

export { WalletLayout };
