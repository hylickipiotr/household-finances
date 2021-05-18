import classNames from "classnames";
import React from "react";

export interface TableRowProps {
  key: string;
  as?: string;
  className?: string;
}

const TableRow: React.FC<TableRowProps> = ({
  as,
  className,
  children,
  ...props
}) =>
  React.createElement(
    as || "div",
    {
      className: classNames("table-row", className),
      ...props,
    },
    children
  );

export default TableRow;
