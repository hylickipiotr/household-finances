import { CategorySnippetFragment } from "src/generated/graphql-urql";
import { createContext } from "src/helpers/createContext";

type CategoriesContextValue = {
  categories: CategorySnippetFragment[];
};

const [
  CategoriesContext,
  useCategoriesContext,
] = createContext<CategoriesContextValue>("Categories");

const CategoriesProvider = CategoriesContext.Provider;

export { CategoriesContext, CategoriesProvider, useCategoriesContext };
export type { CategoriesContextValue };
