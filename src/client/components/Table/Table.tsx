import React from "react";
import TableHeader from "./Header";

export interface TableProps<T> {
  headers: React.ReactNode;
  data: T[];
  rowRender: (data: T) => React.ReactNode;
}

export type TableElementType = <T>(props: TableProps<T>) => JSX.Element;

const Table: TableElementType = ({ headers, data, rowRender }) => (
  <div>
    <div className="table min-w-full shadow-sm">
      <TableHeader items={headers} />

      <div className="table-row-group">
        {data.map((item) => rowRender(item))}
      </div>
    </div>
  </div>
);

export default Table;
