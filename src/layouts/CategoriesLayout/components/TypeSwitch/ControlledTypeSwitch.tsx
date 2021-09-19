import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { TypeSwitch } from ".";
import { TypeSwitchProps } from "./TypeSwitch";

type ControlledTypeSwitchProps = Omit<TypeSwitchProps, "name"> &
  Required<Pick<TypeSwitchProps, "name">>;

const ControlledTypeSwitch: React.VFC<ControlledTypeSwitchProps> = (props) => {
  const { name } = props;

  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ control, name });
  return <TypeSwitch value={value} onChange={onChange} />;
};

export { ControlledTypeSwitch };
