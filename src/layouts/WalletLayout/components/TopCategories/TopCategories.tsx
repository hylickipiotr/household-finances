import * as React from "react";
import { TopCategorySnippetFragment } from "src/generated/graphql-urql";
import { TopCategoryItem } from "./TopCategoryItem";

type TopCategoriesProps = {
  categories: TopCategorySnippetFragment[];
};

const TopCategories: React.VFC<TopCategoriesProps> = ({ categories }) => {
  if (!categories.length) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Top Categories</h2>
        <button
          type="button"
          className="text-sm text-gray-400 transition-colors ease-out duration-75 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          Show all
        </button>
      </div>
      <ul className="space-y-6 p-5 bg-white border border-gray-300 rounded-xl">
        {categories.map(({ category, ...rest }) => (
          <TopCategoryItem key={category.id} {...category} {...rest} />
        ))}
      </ul>
    </div>
  );
};

export { TopCategories };
