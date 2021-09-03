import dayjs from "dayjs";
import React from "react";
import { TransactionSnippetFragment } from "src/client/graphql/types.generated";
import tw from "tailwind-styled-components";
import { getTransactionIcon } from "./getTransactionIcon";
import { TransactionItem } from "./TransactionListItem";

const StyledListContainer = tw.div`
  space-y-4
`;

type TransactionListProps<
  T extends TransactionSnippetFragment = TransactionSnippetFragment
> = {
  data: T[];
};

function TransactionList({ data }: TransactionListProps) {
  return (
    <StyledListContainer>
      {data.map(({ id, amount, description, isIncome, title, date }) => (
        <TransactionItem
          key={id}
          title={title}
          description={description}
          amount={amount}
          icon={getTransactionIcon(title)}
          isIncome={isIncome}
          date={dayjs(date)}
        />
      ))}
    </StyledListContainer>
  );
}

export default TransactionList;
