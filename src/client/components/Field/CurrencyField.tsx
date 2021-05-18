import numeral from "numeral";
import React from "react";
import Field, { FieldElementType } from "./Field";

const CurrencyField: FieldElementType = (props) => (
  <Field
    {...props}
    aligment="right"
    previewElement={(value) => (
      <span>{numeral(value).format("0,0.00")} zł</span>
    )}
  >
    {({ value, onChange }) => (
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value as any)}
        className="px-3 py-2 w-full focus:outline-none bg-gray-100"
      />
    )}
  </Field>
);

export default CurrencyField;
