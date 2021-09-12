import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Field, FieldProps } from "./Field";

type ControlledFieldProps = FieldProps;

const ControlledField: React.FC<ControlledFieldProps> = ({
  name,
  children,
  ...props
}) => {
  const { control } = useFormContext();
  const { fieldState } = useController({ name, control });

  return (
    <Field name={name} error={fieldState.error?.message} {...props}>
      {children}
    </Field>
  );
};

export { ControlledField };
