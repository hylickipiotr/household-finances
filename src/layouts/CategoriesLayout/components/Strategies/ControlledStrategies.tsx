import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Strategies } from ".";
import { StrategiesProps } from "./Strategies";

type ControlledStrategiesProps = StrategiesProps & {
  name: string;
};

const ControlledStrategies: React.VFC<ControlledStrategiesProps> = (props) => {
  const { name } = props;
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });
  return <Strategies name={name} value={value} onChange={onChange} />;
};

export { ControlledStrategies };
