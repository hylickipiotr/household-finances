import React from "react";
import { TransactionType } from "src/client/graphql/types.generated";
import Tag from "../Tag/Tag";
import Field, { FieldElementType } from "./Field";

const TypeField: FieldElementType = (props) => {
  const intenseElement = <Tag color="green">Przychód</Tag>;
  const extenseElement = <Tag color="red">Wydatek</Tag>;

  return (
    <Field
      {...props}
      aligment="center"
      previewElement={(value) =>
        value === TransactionType.Expense ? extenseElement : intenseElement
      }
    >
      {({ value, onChange }) => (
        <select
          value={value}
          onChange={(e) => onChange && onChange(e.target.value as any)}
          className="px-3 py-2 w-full focus:outline-none bg-gray-100"
        >
          <option value={TransactionType.Expense}>Wydatek</option>
          <option value={TransactionType.Income}>Przychód</option>
        </select>
      )}
    </Field>
  );
};

export default TypeField;
