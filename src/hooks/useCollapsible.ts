import { CollapsibleProps } from "@radix-ui/react-collapsible";
import * as React from "react";

type UseCollapsible = (
  defaultValue?: boolean
) => Pick<CollapsibleProps, "defaultOpen" | "open" | "onOpenChange">;

const useCollapsible: UseCollapsible = (defaultOpen = true) => {
  const [open, setOpen] = React.useState(defaultOpen);

  const onOpenChange = () => {
    setOpen((open) => !open);
  };

  return {
    defaultOpen,
    open,
    onOpenChange,
  };
};

export { useCollapsible };
