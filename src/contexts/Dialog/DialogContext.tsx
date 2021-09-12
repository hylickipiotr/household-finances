import * as React from "react";
import { createContext } from "src/helpers/createContext";

type DialogContextValue = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const [DialogContext, useDialogContext] = createContext<DialogContextValue>();

const useDialog = (defaultOpen = false) => {
  const [open, onOpenChange] = React.useState(defaultOpen);

  return {
    open,
    onOpenChange,
  };
};

const DialogProvider = DialogContext.Provider;

export { DialogProvider, useDialog, useDialogContext };
