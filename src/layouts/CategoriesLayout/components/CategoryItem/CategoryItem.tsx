import * as React from "react";
import { CategorySnippetFragment } from "src/generated/graphql-urql";
import { useDialog } from "src/hooks/useDialog";
import tw from "tailwind-styled-components";
import { CategoryDialog } from "../CategoryDialog/CategoryDialog";

type CategoryItemProps = CategorySnippetFragment;

const CategoryItem: React.VFC<CategoryItemProps> = (props) => {
  const { icon, name } = props;

  const dialog = useDialog();

  const handleClick = () => {
    dialog.onOpenChange(true);
  };

  return (
    <>
      <StyledWrapper onClick={handleClick}>
        <StyledIcon>{icon}</StyledIcon>
        <StyledName>{name}</StyledName>
      </StyledWrapper>
      <CategoryDialog {...dialog} data={props} />
    </>
  );
};

/* -------------------------------------------------------------------------- */

const StyledWrapper = tw.li`
flex
items-center
px-6
h-16
rounded-lg
shadow-airbnb-4
cursor-pointer
transition
duration-75
hover:border-gray-400
hover:shadow-airbnb-4
`;

const StyledIcon = tw.span`
  text-2xl
`;

const StyledName = tw.p`
  ml-4
  font-medium
  line-clamp-1
`;

export { CategoryItem };
