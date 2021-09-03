import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import React from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { useCollapsible } from "src/client/hooks/useCollapsible";

export type NavGroupProps = {
  title: string;
};

function NavGroup({ title, children }: React.PropsWithChildren<NavGroupProps>) {
  const collapsible = useCollapsible();
  const { open } = collapsible;
  const Arrow = open ? RiArrowDownSLine : RiArrowRightSLine;

  return (
    <Collapsible {...collapsible} className="space-y-2">
      <CollapsibleTrigger className="flex items-center px-2 space-x-2">
        <Arrow className="w-3.5 h-3.5 text-gray-500" />
        <p className="text-gray-900 text-base leading-5 font-semibold">
          {title}
        </p>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}

export { NavGroup };
