import * as React from "react";

type Config<T> = {
  value?: T;
  onChange?: (value: T) => void;
  defaultValue: T;
};

function useControlledState<T = string>(config: Config<T>) {
  const [value, setValue] = React.useState(config.defaultValue);

  return {
    value: config.value || value,
    onChange: config.onChange || setValue,
    defaultValue: config.defaultValue,
  };
}

export { useControlledState };
