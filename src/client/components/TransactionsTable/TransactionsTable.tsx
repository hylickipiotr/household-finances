import React from "react";
import { HiArrowCircleDown, HiCalendar, HiCash, HiPlus } from "react-icons/hi";
import { TransactionSnippetFragment } from "../../graphql/types.generated";
import TableHeaderCell from "../Table/HeaderCell";
import Table from "../Table/Table";
import TransactionRow from "../TransactionRow/TransactionRow";

export interface TransactionsTableProps {
  dataSource: TransactionSnippetFragment[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  dataSource,
}) => {
  if (dataSource.length === 0) {
    return <div>Brak danych</div>;
  }

  return (
    <>
      <Table
        headers={
          <>
            <TableHeaderCell>Nazwa</TableHeaderCell>
            <TableHeaderCell className="w-40" icon={<HiCash />}>
              Kwota
            </TableHeaderCell>
            <TableHeaderCell className="w-32" icon={<HiArrowCircleDown />}>
              Typ
            </TableHeaderCell>
            <TableHeaderCell className="w-40" icon={<HiCalendar />}>
              Data
            </TableHeaderCell>
            {/* <TableHeaderCell icon={<HiTag />}>Tagi</TableHeaderCell> */}
          </>
        }
        data={dataSource}
        rowRender={(data) => <TransactionRow data={data} />}
      />
      <div>
        <button
          className="w-full flex items-center p-2 bg-white  hover:bg-gray-50 text-sm text-gray-400 hover:text-gray-700 border-b transition-colors ease-in-out duration-100"
          type="button"
        >
          <HiPlus />
          <span className="ml-2">Dodaj</span>
        </button>
      </div>
    </>
  );
};

export default TransactionsTable;
