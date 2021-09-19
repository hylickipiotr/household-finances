import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import * as React from "react";
import { RiAddLine, RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { CategorySnippetFragment } from "src/generated/graphql-urql";
import { useCollapsible } from "src/hooks/useCollapsible";
import tw from "tailwind-styled-components";
import { CategoriesList } from "../CategoriesList";

type CategoriesSectionProps = {
  title: string;
  categories: CategorySnippetFragment[];
  onAddCategory: () => void;
};

const CategoriesSection: React.VFC<CategoriesSectionProps> = ({
  title,
  categories,
  onAddCategory,
}) => {
  const collapsible = useCollapsible();

  return (
    <StyledCollapsible {...collapsible}>
      <StyledHeader>
        <StyledArrowTrigger>
          {collapsible.open ? (
            <StyledOpenArrowIcon />
          ) : (
            <StyledCloseArrowIcon />
          )}
        </StyledArrowTrigger>
        <StyledHeaderContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledCreateButton onClick={onAddCategory}>
            <StyledCreateButtonIcon />
            Add category
          </StyledCreateButton>
        </StyledHeaderContainer>
      </StyledHeader>
      <StyledContent>
        <CategoriesList categories={categories} />
      </StyledContent>
    </StyledCollapsible>
  );
};

/* -------------------------------------------------------------------------- */

const StyledCollapsible = tw(Collapsible)`
w-full
`;

const StyledHeader = tw.div`
flex
-ml-8
`;

const StyledArrowTrigger = tw(CollapsibleTrigger)`
h-7
w-7
flex
items-center
justify-center
text-gray-400
rounded-md
transition
duration-75
hover:bg-gray-200
hover:text-gray-900
`;

const StyledOpenArrowIcon = tw(RiArrowDownSLine)`
w-5 
h-5
`;

const StyledCloseArrowIcon = tw(RiArrowRightSLine)`
w-5 
h-5
`;

const StyledHeaderContainer = tw.div`
ml-1
mt-0.5
flex-1
flex
justify-between
pb-2
border-b
`;

const StyledTitle = tw.p`
font-medium
text-gray-900
`;

const StyledCreateButton = tw.button`
flex
items-center
text-gray-500
hover:text-gray-900
`;

const StyledCreateButtonIcon = tw(RiAddLine)`
mr-2
`;

const StyledContent = tw(CollapsibleContent)`
mt-6
`;

export { CategoriesSection };
