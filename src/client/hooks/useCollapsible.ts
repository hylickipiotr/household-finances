import { useState } from "react";

function useCollapsible(defaultOpen = true) {
  const [open, setOpen] = useState(defaultOpen);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return {
    open,
    onOpenChange,
    defaultOpen,
  };
}

export { useCollapsible };
