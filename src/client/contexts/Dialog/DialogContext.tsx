import React, { useState } from "react";
import { createContext } from "src/client/helpers/createContext";

type DialogContextValue = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const [DialogContext, useDialogContext] = createContext<DialogContextValue>();

const useDialog = (defaultOpen = false) => {
  const [open, onOpenChange] = useState(defaultOpen);

  return {
    open,
    onOpenChange,
  };
};

const DialogProvider = DialogContext.Provider;

export { DialogProvider, useDialog, useDialogContext };
