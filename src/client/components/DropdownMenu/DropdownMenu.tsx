import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import tw from "tailwind-styled-components";

const StyledDropdownContent = tw(DropdownMenuPrimitive.Content)`
  py-1.5
  bg-white
  shadow-3xl
  rounded-lg
`;

const StyledDropdownItem = tw(DropdownMenuPrimitive.Item)``;

const StyledDropdownSeparator = tw(DropdownMenuPrimitive.Separator)``;

const Dropdown = DropdownMenuPrimitive.Root;
const DropdownTrigger = DropdownMenuPrimitive.Trigger;
const DropdownContent = StyledDropdownContent;
const DropdownItem = StyledDropdownItem;
const DropdownSeparator = StyledDropdownSeparator;

const Root = Dropdown;
const Trigger = DropdownTrigger;
const Content = DropdownContent;
const Item = DropdownItem;
const Separator = DropdownSeparator;

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
};
export { Root, Trigger, Content, Item, Separator };
