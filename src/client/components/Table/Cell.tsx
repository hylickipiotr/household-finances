import React from "react";

export type TableCellAligment = "left" | "right" | "center";

export interface TablCellProps {
  aligment?: TableCellAligment;
}

const TableCell: React.FC<TablCellProps> = ({
  aligment = "left",
  children,
}) => {
  const aligmentClassName = {
    "text-left": aligment === "left",
    "text-right": aligment === "right",
    "text-center": aligment === "center",
  };
  return (
    <div className="table-cell whitespace-nowrap text-sm bg-white text-gray-500 border-l border-gray-300 first:border-l-0 border-b">
      {children}
    </div>
  );
};

export default TableCell;
