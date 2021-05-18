import React, { FormEventHandler, useState } from "react";
import {
  TransactionSnippetFragment,
  TransactionType,
  useCreateTransactionMutation,
  useUpdateTransactionMutation,
} from "../../graphql/types.generated";
import CurrencyField from "../Field/CurrencyField";
import DateField from "../Field/DateField";
import TextField from "../Field/TextField";
import TypeField from "../Field/TypeField";
import TableCell from "../Table/Cell";
import TableRow from "../Table/Row";

export interface TransactionProps {
  data: TransactionSnippetFragment;
}

export type TransactionInput = {
  name: string;
  amount: number;
  type: TransactionType;
  date?: string;
};

const TransactionRow: React.FC<TransactionProps> = ({ data }) => {
  const { id, name, date, type, amount } = data;
  const [formValues, setFormValues] = useState<TransactionInput>({
    name: data?.name || "",
    amount: data?.amount || 0,
    type: data?.type || TransactionType.Expense,
    date: data?.date || undefined,
  });

  const [
    createTransactionResult,
    createTransaction,
  ] = useCreateTransactionMutation();
  const [
    updateTransactionResult,
    updateTransaction,
  ] = useUpdateTransactionMutation();

  const handleSave: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (data) {
      await updateTransaction({
        id: data.id,
        data: {
          name: {
            set: formValues.name,
          },
          amount: {
            set: Number(formValues.amount),
          },
          type: {
            set: formValues.type,
          },
          date: {
            set: formValues.date || null,
          },
        },
      });
    } else {
      await createTransaction({ data: formValues });
    }
  };

  return (
    <TableRow key={id} as="form">
      <TableCell>
        <TextField value={name || ""} />
      </TableCell>
      <TableCell>
        <CurrencyField value={amount || ""} />
      </TableCell>
      <TableCell>
        <TypeField value={type} />
      </TableCell>
      <TableCell>
        <DateField value={date || ""} />
      </TableCell>
    </TableRow>
  );
};

export default TransactionRow;
