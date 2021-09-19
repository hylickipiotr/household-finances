import clsx from "clsx";
import * as React from "react";
import CurrencyInputField, {
  CurrencyInputProps as CurrencyInputFieldProps,
} from "react-currency-input-field";

type CurrencyInputProps = CurrencyInputFieldProps;
type CurrencyInputElement = HTMLInputElement;

const CurrencyInput = React.forwardRef<
  CurrencyInputElement,
  CurrencyInputProps
>((props, ref) => {
  const {
    className,
    autoComplete = "off",
    allowDecimals = true,
    decimalsLimit = 2,
    allowNegativeValue = false,
    intlConfig = { locale: "pl-PL", currency: "PLN" },
    ...rest
  } = props;

  return (
    <CurrencyInputField
      ref={ref}
      autoComplete={autoComplete}
      allowDecimals={allowDecimals}
      allowNegativeValue={allowNegativeValue}
      decimalsLimit={decimalsLimit}
      intlConfig={intlConfig}
      className={clsx(
        "relative w-full pl-2.5 pr-12 h-10 border border-gray-300 text-base rounded-md transition-colors ease-out duration-75 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:ring-opacity-20",
        className
      )}
      {...rest}
    />
  );
});

export { CurrencyInput };
export type { CurrencyInputProps };
