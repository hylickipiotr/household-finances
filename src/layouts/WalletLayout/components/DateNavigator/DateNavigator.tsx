import * as React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Button } from "src/components/Button";
import { IconButton } from "src/components/IconButton";
import { useDateContext } from "src/contexts/Date";
import tw from "tailwind-styled-components";

const DateNavigator: React.VFC = () => {
  const {
    year,
    monthName,
    nextMonth,
    previousMonth,
    goToCurrentMonth,
  } = useDateContext();

  return (
    <StyledWrapper>
      <StyledButtons>
        <Button type="outline" onClick={goToCurrentMonth}>
          Today
        </Button>
        <IconButton
          icon={<RiArrowLeftSLine />}
          type="secondary"
          shape="square"
          onClick={previousMonth}
        />
        <IconButton
          icon={<RiArrowRightSLine />}
          type="secondary"
          shape="square"
          onClick={nextMonth}
        />
      </StyledButtons>
      <StyledLabel>{`${monthName} ${year}`}</StyledLabel>
    </StyledWrapper>
  );
};

const StyledWrapper = tw.div`
flex 
items-center
`;

const StyledButtons = tw.div`
flex
space-x-1
items-center
`;

const StyledLabel = tw.div`
ml-4
w-60
capitalize
text-lg
font-medium
text-gray-900
`;

export { DateNavigator };
