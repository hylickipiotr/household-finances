import React from "react";
import Field, { FieldElementType } from "./Field";

const DateField: FieldElementType = (props) => (
  <Field
    {...props}
    previewElement={(value) => <span className="truncate">{value}</span>}
  >
    {({ value, onChange }) => (
      <input
        value={value}
        type="date"
        onChange={(e) => onChange && onChange(e.target.value as any)}
        className="px-3 py-2 w-full focus:outline-none bg-gray-100"
      />
    )}
  </Field>
);

export default DateField;
