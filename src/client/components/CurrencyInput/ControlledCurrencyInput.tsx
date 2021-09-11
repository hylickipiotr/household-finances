import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { CurrencyInput, CurrencyInputProps } from "./CurrencyInput";

type ControlledCurrencyInputProps = CurrencyInputProps &
  Required<Pick<CurrencyInputProps, "name">>;

const ControlledCurrencyInput: React.VFC<ControlledCurrencyInputProps> = ({
  name,
  ...rest
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, ...restField },
  } = useController({
    name,
    control,
  });

  return <CurrencyInput onValueChange={onChange} {...restField} {...rest} />;
};

export { ControlledCurrencyInput };
