import * as React from "react";
import { useForm } from "react-hook-form";
import { RiCloseLine } from "react-icons/ri";
import { Input } from "src/components/Input/Input";
import { useControlledState } from "src/hooks/useControlledState";
import { Keys } from "src/types/Keys";
import tw from "tailwind-styled-components";

type StrategyFormValues = {
  strategy: string;
};

export type StrategiesProps = {
  name: string;
  defaultValue?: string[];
  value?: string[];
  onChange?: (value: string[]) => void;
};

const Strategies: React.VFC<StrategiesProps> = (props) => {
  const {
    defaultValue = [],
    name,
    value: propsValue,
    onChange: propsOnChange,
  } = props;

  const { value, onChange } = useControlledState({
    defaultValue,
    value: propsValue,
    onChange: propsOnChange,
  });
  const { getValues, reset, register } = useForm<StrategyFormValues>({
    defaultValues: {
      strategy: "",
    },
  });

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== Keys.Enter) return;

    const { strategy } = getValues();
    const newStrategies = [...value, strategy];
    onChange(newStrategies);
    reset();
  };

  const handleRemove = (index: number) => () => {
    const newValue = [...value];
    newValue.splice(index, 1);
    onChange(newValue);
  };

  return (
    <StyledWrapper>
      <Input
        {...register("strategy")}
        id={name}
        onKeyPress={handleKeyPress}
        placeholder="Enter new strategy"
      />
      <StyledList>
        {value.map((strategy, index) => (
          <StyledItem>
            {strategy}
            <StyledRemoveButton type="button" onClick={handleRemove(index)}>
              <RiCloseLine />
            </StyledRemoveButton>
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

const StyledWrapper = tw.div`
space-y-2
`;

const StyledList = tw.ul`
flex
gap-2
flex-wrap
`;

const StyledItem = tw.li`
group
relative

flex
items-center
h-7
px-3

font-mono
text-sm
text-gray-600

bg-gray-200

rounded-full
overflow-hidden
`;

const StyledRemoveButton = tw.button`
absolute
right-0
top-0

flex
items-center
justify-center
w-7
h-7

bg-gray-300

text-gray-700

opacity-0
rounded-full
transition
duration-75
shadow-lg

group-hover:opacity-100
`;

export { Strategies };
