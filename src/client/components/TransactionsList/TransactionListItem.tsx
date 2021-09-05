import { Dayjs } from "dayjs";
import numeral from "numeral";
import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import tw from "tailwind-styled-components";
import { TransactionMetaItem } from "./TransactionMetaItem";

const StyledTransactionContainer = tw.div`
  flex
  space-x-4
  pb-3
  border-b
  border-gray-300
`;

const StyledTransactionIcon = tw.div`
  w-9
  h-9
  flex
  justify-center
  items-center
  bg-gray-100
  rounded-full
`;

const StyledTransactionHeader = tw.div`
  flex
  items-center
  space-x-4
`;

const StyledTransactionTitle = tw.p`
  flex-1
  text-base
  leading-6
  font-normal
  text-gray-900
  truncate
`;

const StyledTransactionAmount = tw.p<{ isIncome: boolean }>`
  font-mono
  w-24
  text-sm
  leading-6
  font-normal
  text-right
  ${(props) => (props.isIncome ? "text-green-700" : "text-red-700")}
`;

const StyledTransactionDescription = tw.p`
  text-xs
  leading-4
  font-normal
  text-gray-400
  truncate
`;

const StyledTransactionContent = tw.div`
  w-full
`;

const StyledTransactionMeta = tw.div`
  flex
  items-center
  justify-end
  space-x-4
`;

interface TransactionItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  amount: number;
  description: React.ReactNode;
  isIncome: boolean;
  date: Dayjs;
}

const TransactionItem: React.VFC<TransactionItemProps> = ({
  icon,
  title,
  amount,
  description,
  isIncome,
  date,
}) => {
  const formattedAmount = `${isIncome ? "+" : "-"}${numeral(amount).format(
    `0,0.00`
  )} zł`;

  const formattedDate = date.format("D MMM");

  return (
    <StyledTransactionContainer>
      <StyledTransactionIcon>{icon}</StyledTransactionIcon>
      <StyledTransactionContent>
        <StyledTransactionHeader className="flex space-x-4">
          <StyledTransactionTitle>{title}</StyledTransactionTitle>
          <StyledTransactionAmount isIncome={isIncome}>
            {formattedAmount}
          </StyledTransactionAmount>
        </StyledTransactionHeader>
        <StyledTransactionDescription>
          {description}
        </StyledTransactionDescription>
        <StyledTransactionMeta>
          <TransactionMetaItem
            icon={<HiOutlineCalendar className="w-3.5 h-3.5" />}
          >
            {formattedDate}
          </TransactionMetaItem>
        </StyledTransactionMeta>
      </StyledTransactionContent>
    </StyledTransactionContainer>
  );
};

export { TransactionItem };
