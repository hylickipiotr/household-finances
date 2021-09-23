import * as React from "react";
import {
  CategorySnippetFragment,
  TopCategorySnippetFragment,
} from "src/generated/graphql-urql";
import { formatCurrency } from "src/helpers/formatCurrency";

type TopCategoryItemProps = CategorySnippetFragment &
  Pick<TopCategorySnippetFragment, "amount" | "transactionsCount">;

const TopCategoryItem: React.VFC<TopCategoryItemProps> = ({
  id,
  icon,
  name,
  amount,
  transactionsCount,
}) => {
  return (
    <li key={id} className="flex items-center space-x-5">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
        <span className="text-xl" role="img">
          {icon}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">{name}</p>
          <p className="text-red-600 text-sm font-semibold">
            {formatCurrency(amount)}
          </p>
        </div>
        <p className="text-sm text-gray-400">
          {`${transactionsCount} ${
            transactionsCount === 1 ? "transaction" : "transactions"
          }`}
        </p>
      </div>
    </li>
  );
};

export { TopCategoryItem };
