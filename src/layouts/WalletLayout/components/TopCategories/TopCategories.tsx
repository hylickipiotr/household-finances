import * as React from "react";
import { formatCurrency } from "src/helpers/formatCurrency";
import { TopCategory } from "src/types/Category";

/* -------------------------------------------------------------------------- */
/*                               TopCategoryItem                              */
/* -------------------------------------------------------------------------- */

type TopCategoryItemProps = TopCategory;

const TopCategoryItem: React.VFC<TopCategoryItemProps> = ({
  id,
  icon,
  name,
  totalAmount,
  transactionCount,
}) => {
  return (
    <li key={id} className="flex items-center space-x-5">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg">
        <span className="text-xl" role="img">
          {icon}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">{name}</p>
          <p className="text-red-600 text-sm font-semibold">
            -{formatCurrency(totalAmount)}
          </p>
        </div>
        <p className="text-sm text-gray-400">{transactionCount} transactions</p>
      </div>
    </li>
  );
};

/* -------------------------------------------------------------------------- */
/*                                TopCategories                               */
/* -------------------------------------------------------------------------- */

type TopCategoriesProps = {
  data: TopCategory[];
};

const TopCategories: React.VFC<TopCategoriesProps> = ({ data }) => {
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
        {data.map((category) => (
          <TopCategoryItem key={category.id} {...category} />
        ))}
      </ul>
    </div>
  );
};

export { TopCategories };
