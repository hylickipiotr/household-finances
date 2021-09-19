import * as React from "react";

type UseDialog = (
  defaultOpen?: boolean
) => {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const useDialog: UseDialog = (defaultOpen = false) => {
  const [open, onOpenChange] = React.useState(defaultOpen);

  return {
    open,
    onOpenChange,
  };
};

export { useDialog };
export type { UseDialog };
