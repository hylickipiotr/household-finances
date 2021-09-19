import * as React from "react";
import { Layout } from "src/components/Layout";
import { PageHeader } from "src/components/PageHeader";
import { useCategoriesContext } from "src/contexts/Categories";
import { CategorySnippetFragment, Type } from "src/generated/graphql-urql";
import { useDialog } from "src/hooks/useDialog";
import tw from "tailwind-styled-components";
import { CategoriesSection } from "./components/CategoriesSection";
import { CategoryDialog } from "./components/CategoryDialog";

const filterCategory = (type: Type) => (category: CategorySnippetFragment) =>
  category.type === type;

const CategoriesLayout: React.VFC = () => {
  const dialogIncome = useDialog();
  const dialogExpense = useDialog();
  const { categories } = useCategoriesContext();

  const handleAddClick = (dialogBag: ReturnType<typeof useDialog>) => () =>
    dialogBag.onOpenChange(true);

  return (
    <Layout>
      <PageHeader
        title="Categories"
        description="Overview categories of transactions"
      />
      <StyledWrapper>
        <CategoriesSection
          title="Incomes"
          categories={categories.filter(filterCategory(Type.Income))}
          onAddCategory={handleAddClick(dialogIncome)}
        />
        <CategoriesSection
          title="Expenses"
          categories={categories.filter(filterCategory(Type.Expense))}
          onAddCategory={handleAddClick(dialogExpense)}
        />
      </StyledWrapper>
      <CategoryDialog {...dialogIncome} />
      <CategoryDialog {...dialogExpense} />
    </Layout>
  );
};

/* -------------------------------------------------------------------------- */

const StyledWrapper = tw.div`
  mt-8
  space-y-12
`;

export { CategoriesLayout };
