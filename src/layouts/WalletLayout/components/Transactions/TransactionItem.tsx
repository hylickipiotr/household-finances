import * as React from "react";
import { TransactionSnippetFragment } from "src/generated/graphql-urql";
import { formatCurrency } from "src/helpers/formatCurrency";
import tw from "tailwind-styled-components";

type TransactionItemProps = TransactionSnippetFragment;

const TransactionItem: React.FC<TransactionItemProps> = (props) => {
  const { title, amount, description, category } = props;

  return (
    <StyledWrapper>
      <StyledIconWrapper>{category.icon}</StyledIconWrapper>
      <StyledContent>
        <StyledHeader>
          <StyledTitle>{title}</StyledTitle>
          <StyledAmount {...props}>
            {amount > 0 && "+"}
            {formatCurrency(amount)}
          </StyledAmount>
        </StyledHeader>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
    </StyledWrapper>
  );
};

/* -------------------------------------------------------------------------- */

const StyledWrapper = tw.li`
flex
pt-4
first:pt-0
`;

const StyledIconWrapper = tw.div`
w-12
h-12
flex
items-center
justify-center
bg-gray-100
rounded-xl
text-xl
`;

const StyledContent = tw.div`
ml-5
flex-1
`;

const StyledHeader = tw.div`
flex
justify-between
`;

const StyledTitle = tw.p`
font-semibold
text-gray-900
truncate
`;

const StyledAmount = tw.p<TransactionItemProps>`
text-sm font-semibold
${(p) => (p.amount > 0 ? "text-green-600" : "text-red-600")}
`;

const StyledDescription = tw.p`
line-clamp-1
text-sm
text-gray-400
`;

export { TransactionItem };
