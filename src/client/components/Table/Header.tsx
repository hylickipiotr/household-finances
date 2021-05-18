import React from "react";

export interface TableHeader {
  items: React.ReactNode;
}

const TableHeader: React.FC<TableHeader> = ({ items }) => (
  <div className="table-header-group">{items}</div>
);

export default TableHeader;
