import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Dayjs } from "dayjs";
import React from "react";
import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RiAddLine } from "react-icons/ri";
import { useDateContext } from "src/contexts/date";
import tw from "tailwind-styled-components";

const StyledMonthPopoverTrigger = tw(PopoverTrigger)`
  flex
  pl-2.5
  pr-1.5
  py-0.5
  -ml-2.5
  items-center
  space-x-2.5
  text-lg
  leading-6
  font-semibold
  text-left
  text-gray-900
  capitalize
  bg-transparent
  rounded-md
  hover:bg-gray-100
  hover:shadow-sm
  focus:outline-none
  focus:bg-gray-100
`;

const StyledMonthPopoverContent = tw(PopoverContent)`
  bg-white
  px-3
  py-2
  rounded-md
  shadow-3xl
  capitalize
`;

type MonthSelectProps = {
  value: Dayjs;
  // onChange: (value: Dayjs) => void;
};

const MonthSelect = ({ value }: MonthSelectProps) => {
  const formattedValue = value.format("MMMM YYYY");

  return (
    <Popover>
      <StyledMonthPopoverTrigger>
        <span>{formattedValue}</span>
        <HiChevronDown className="text-gray-400" />
      </StyledMonthPopoverTrigger>
      <StyledMonthPopoverContent side="bottom" sideOffset={4}>
        {/* TODO */}
        Sierpień
      </StyledMonthPopoverContent>
    </Popover>
  );
};

const StyledMonthNavigationGroup = tw.div`
  flex
  -space-x-px
`;

const StyledMonthNavigationButton = tw.button`
  flex
  items-center
  justify-center
  w-6
  h-6
  bg-white
  text-gray-400
  border
  border-gray-200
  shadow-sm
  hover:bg-gray-100
  hover:text-gray-500
  focus:outline-none
  focus:bg-blue-50
  focus:text-gray-500
  first:rounded-l-md
  last:rounded-r-md
`;

const StyledCurrentMonthButton = tw.button`
  px-2 
  py-1
  bg-white
  text-gray-400
  text-xs
  leading-4
  font-medium
  border
  border-gray-200
  shadow-sm
  rounded-md
  hover:bg-gray-100
  hover:text-gray-500
  focus:outline-none
  focus:bg-blue-50
  focus:text-gray-500
`;

const StyledAddTransactionButton = tw.button`
  flex
  items-center
  space-x-1
  py-0.5
  text-sm
  text-gray-400
  hover:text-blue-600
  focus:outline-none
  focus:text-gray-500
`;

const StyledTransactionHeaderWrapper = tw.div`
  flex
  items-center
  justify-between
`;

const StyledActions = tw.div`
  flex
  items-center
  space-x-2
`;

const TransactionsHeader = () => {
  const { date, nextMonth, prevMonth, now } = useDateContext();

  return (
    <StyledTransactionHeaderWrapper>
      <MonthSelect value={date} />
      <StyledActions>
        <StyledMonthNavigationGroup>
          <StyledMonthNavigationButton onClick={prevMonth}>
            <HiChevronLeft />
          </StyledMonthNavigationButton>
          <StyledMonthNavigationButton onClick={nextMonth}>
            <HiChevronRight />
          </StyledMonthNavigationButton>
        </StyledMonthNavigationGroup>
        <StyledCurrentMonthButton onClick={now}>Dziś</StyledCurrentMonthButton>
        <StyledAddTransactionButton>
          <RiAddLine className="mt-0.5 text-blue-600" />
          <span>Dodaj transakcję</span>
        </StyledAddTransactionButton>
      </StyledActions>
    </StyledTransactionHeaderWrapper>
  );
};

export { TransactionsHeader };
