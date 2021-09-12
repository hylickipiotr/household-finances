import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Input, InputProps } from "./Input";

type ControlledInputProps = InputProps & Required<Pick<InputProps, "name">>;

const ControlledInput: React.VFC<ControlledInputProps> = ({
  name,
  ...props
}) => {
  const { control } = useFormContext();
  const { field } = useController({
    control,
    name,
  });

  return <Input {...field} {...props} />;
};

export { ControlledInput };
