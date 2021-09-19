import * as React from "react";
import { createContext } from "src/helpers/createContext";

type DialogContextValue = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const [DialogContext, useDialogContext] = createContext<DialogContextValue>();

const DialogProvider = DialogContext.Provider;

export { DialogProvider, useDialogContext };
