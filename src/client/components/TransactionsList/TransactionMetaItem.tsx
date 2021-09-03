import React from "react";
import tw from "tailwind-styled-components";

type MetaColor = "gray" | "yellow" | "blue";

const StyledContainer = tw.div<{ color: MetaColor }>`
  flex
  items-center
  space-x-1
  ${({ color }) => (color === "gray" ? "text-gray-400" : "")}
  ${({ color }) => (color === "yellow" ? "text-yellow-600" : "")}
  ${({ color }) => (color === "blue" ? "text-blue-600" : "")}
`;

const StyledText = tw.div`
  text-sm
  leading-5
  font-normal
`;

interface TransactionMetaItemProps {
  icon?: React.ReactNode;
  color?: MetaColor;
}

const TransactionMetaItem: React.FC<TransactionMetaItemProps> = ({
  color = "gray",
  icon,
  children,
}) => {
  return (
    <StyledContainer color={color}>
      {icon}
      <StyledText>{children}</StyledText>
    </StyledContainer>
  );
};

export { TransactionMetaItem };
export type { MetaColor, TransactionMetaItemProps };
