import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import * as React from "react";
import { Type } from "src/generated/graphql-urql";
import { useControlledState } from "src/hooks/useControlledState";

export type TypeSwitchProps = {
  name?: string;
  value?: Type;
  onChange?: (value: Type) => void;
  defaultValue?: Type;
  className?: string;
};

const types = [Type.Expense, Type.Income];

const TypeSwitch: React.VFC<TypeSwitchProps> = (props) => {
  const { name, className, ...rest } = props;

  const stateBag = useControlledState({
    defaultValue: Type.Expense,
    ...rest,
  });

  return (
    <RadioGroup
      id={name}
      className={clsx(
        "w-full h-10 p-1 grid grid-cols-2 gap-x-2 border border-gray-300 rounded-md overflow-hidden",
        className
      )}
      {...stateBag}
    >
      {types.map((type) => (
        <RadioGroup.Option
          value={type}
          className={({ checked }) =>
            clsx(
              "w-full flex items-center justify-center rounded-md capitalize cursor-pointer",
              checked && "bg-blue-600 text-white font-medium shadow-lg",
              !checked && "text-gray-500"
            )
          }
        >
          {type.toLowerCase()}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

/* -------------------------------------------------------------------------- */

export { TypeSwitch };
