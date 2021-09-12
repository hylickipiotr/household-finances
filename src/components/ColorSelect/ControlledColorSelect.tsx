import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { ColorSelect, ColorSelectProps } from "./ColorSelect";

type ControlledColorSelectProps = ColorSelectProps &
  Required<Pick<ColorSelectProps, "name">>;

const ControlledColorSelect: React.VFC<ControlledColorSelectProps> = ({
  name,
  ...rest
}) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
  });

  return <ColorSelect {...field} {...rest} />;
};

export { ControlledColorSelect };
