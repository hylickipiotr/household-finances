import React from "react";
import Field, { FieldElementType } from "./Field";

const TextField: FieldElementType = (props) => (
  <Field {...props}>
    {({ value, onChange }) => (
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value as any)}
        className="px-3 py-2 w-full focus:outline-none bg-gray-100"
      />
    )}
  </Field>
);

export default TextField;
