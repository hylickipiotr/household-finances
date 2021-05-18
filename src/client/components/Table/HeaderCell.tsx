import classNames from "classnames";
import React from "react";

export interface TableHeaderCellProps {
  icon?: React.ReactNode;
  className?: string;
}

const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
  className,
  icon,
}) => (
  <div
    className={classNames(
      "table-cell p-3 py-2 text-sm font-semibold bg-gray-200 text-gray-500 border-l border-gray-300 first:border-l-0",
      className
    )}
  >
    {icon ? (
      <div className="flex items-center">
        {icon}
        <span className="ml-2">{children}</span>
      </div>
    ) : (
      children
    )}
  </div>
);

export default TableHeaderCell;
