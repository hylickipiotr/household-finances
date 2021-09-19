import * as React from "react";
import { CategorySnippetFragment } from "src/generated/graphql-urql";
import tw from "tailwind-styled-components";
import { CategoryItem } from "../CategoryItem";

type CategoriesListProps = {
  categories: CategorySnippetFragment[];
};

const CategoriesList: React.VFC<CategoriesListProps> = ({ categories }) => {
  return (
    <StyledList>
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </StyledList>
  );
};

/* -------------------------------------------------------------------------- */

const StyledList = tw.ul`
  w-full
  grid
  gap-4
  xl:grid-cols-4
`;

export { CategoriesList };
