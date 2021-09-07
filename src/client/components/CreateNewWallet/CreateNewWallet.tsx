import { RadioGroup } from "@headlessui/react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import clsx from "clsx";
import { isEqual } from "lodash";
import React from "react";
import CurrencyInput from "react-currency-input-field";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { BiPlus } from "react-icons/bi";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { Wallet, WalletColor } from "src/@types/Wallet";
import {
  DialogProvider,
  useDialog,
  useDialogContext,
} from "src/client/contexts/Dialog";
import { useCreateWalletMutation } from "src/client/graphql/types.generated";

type WalletFormValues = Pick<Wallet, "name" | "icon" | "color"> & {
  initialBalance: string;
};

/* -------------------------------------------------------------------------- */
/*                                  NameField                                 */
/* -------------------------------------------------------------------------- */

const NameField: React.VFC = () => {
  const fieldName = "name";
  const fieldConfig = {
    minLength: 1,
    maxLength: 60,
    required: true,
  };

  const { watch, register } = useFormContext<WalletFormValues>();
  const value = watch(fieldName);
  return (
    <div className="relative">
      <input
        {...register(fieldName)}
        {...fieldConfig}
        autoComplete="off"
        placeholder="Name"
        className="w-full border-l-0 border-t-0 pr-12 py-2 font-medium text-xl border-r-0 border-b-2 border-gray-300 transition-colors ease-out duration-75 focus:outline-none focus:border-blue-600"
      />
      <div className="absolute top-2 right-0 px-2 h-6 flex items-center text-sm bg-gray-200 text-gray-500 rounded">
        {fieldConfig.maxLength - value.length}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 IconPicker                                 */
/* -------------------------------------------------------------------------- */

const IconPicker: React.VFC = () => {
  const fieldName = "icon";
  const fieldConfig = {
    required: true,
  };

  const { register } = useFormContext<WalletFormValues>();

  return (
    <input
      {...register(fieldName)}
      {...fieldConfig}
      autoComplete="off"
      placeholder="Icon"
      className="w-full py-2 text-xl border-l-0 border-t-0 border-r-0 border-b-2 border-gray-300 transition-colors ease-out duration-75 focus:outline-none focus:border-blue-600"
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                 ColorPicker                                */
/* -------------------------------------------------------------------------- */

const getColorCls = (color: WalletColor) => {
  switch (color) {
    case "blue":
      return "text-blue-600";
    default:
      return "text-gray-500";
  }
};

const colors: WalletColor[] = ["gray", "blue"];

const ColorPicker: React.VFC = () => {
  const fieldName = "color";
  const { watch, setValue } = useFormContext<WalletFormValues>();
  const value = watch(fieldName);
  const handleChange = (value: WalletColor) => {
    setValue(fieldName, value);
  };
  return (
    <RadioGroup
      value={value}
      onChange={handleChange}
      className="flex items-center space-x-3"
    >
      <RadioGroup.Label className="text-gray-400">Color</RadioGroup.Label>
      {colors.map((color) => (
        <RadioGroup.Option key={color} value={color}>
          {({ checked }) =>
            checked ? (
              <RiCheckboxCircleFill
                className={clsx("w-8 h-8", getColorCls(color))}
              />
            ) : (
              <RiCheckboxBlankCircleFill
                className={clsx("w-8 h-8 cursor-pointer", getColorCls(color))}
              />
            )
          }
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

/* -------------------------------------------------------------------------- */
/*                             InitialBalanceField                            */
/* -------------------------------------------------------------------------- */

const InitialBalanceField: React.FC = () => {
  const fieldName = "initialBalance";
  const fieldConfig = {
    name: "initialBalance",
    required: true,
  };

  const { setValue, watch } = useFormContext<WalletFormValues>();
  const value = watch(fieldName);

  const handleValueChange = (value?: string) => {
    setValue(fieldName, value || "0");
  };

  return (
    <CurrencyInput
      {...fieldConfig}
      value={value}
      autoComplete="off"
      allowDecimals
      allowNegativeValue={false}
      decimalsLimit={2}
      intlConfig={{
        locale: "pl-PL",
        currency: "PLN",
      }}
      defaultValue={0}
      placeholder="Initial wallet balance"
      className="w-full border-l-0 border-t-0 py-2 border-r-0 border-b-2 border-gray-300 transition-colors ease-out duration-75 focus:outline-none focus:border-blue-600"
      onValueChange={handleValueChange}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                SubmitButton                                */
/* -------------------------------------------------------------------------- */

type SubmitButtonProps = {
  fetching: boolean;
};

const SubmitButton: React.VFC<SubmitButtonProps> = ({ fetching }) => {
  const { watch } = useFormContext<WalletFormValues>();
  const values = watch();

  const disabled = fetching || isEqual(values, defaultFromValues);

  return (
    <button
      type="submit"
      className={clsx(
        "flex items-center px-6 py-3 bg-blue-600 font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring disabled:bg-gray-300",
        disabled && "cursor-default"
      )}
      disabled={disabled}
    >
      Create
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 CloseButton                                */
/* -------------------------------------------------------------------------- */

type CloseButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const CloseButton: React.FC<CloseButtonProps> = ({ children, ...props }) => {
  const { onOpenChange } = useDialogContext();
  const { watch, reset } = useFormContext<WalletFormValues>();
  const values = watch();

  const handleClose = () => {
    if (!isEqual(values, defaultFromValues)) {
      const answer = window.confirm(
        "Do you want to close? Changes you made may not be save."
      );
      if (!answer) return;
    }
    onOpenChange(false);
    reset();
  };

  return (
    <button {...props} type="button" onClick={handleClose}>
      {children}
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*                                NewWalletForm                               */
/* -------------------------------------------------------------------------- */

const NewWalletForm = () => {
  const { handleSubmit, reset } = useFormContext<WalletFormValues>();
  const [{ fetching }, createWallet] = useCreateWalletMutation();
  const { onOpenChange } = useDialogContext();

  const onSubmit: SubmitHandler<WalletFormValues> = async (data) => {
    const initialBalance = Number(
      data.initialBalance.replace(",", ".").replace(" ", "")
    );
    try {
      await createWallet({
        data: {
          ...data,
          initialBalance,
        },
      });
      onOpenChange(false);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex items-end justify-between px-6 pt-8">
        <h1 className="text-2xl font-semibold">Create wallet</h1>
      </div>
      <div className="px-6 space-y-6">
        <NameField />
        <IconPicker />
        <ColorPicker />
        <InitialBalanceField />
      </div>
      <div className="flex items-center px-6 py-4 justify-end space-x-3 border-t border-gray-300">
        <CloseButton className="flex items-center space-x-3 px-6 py-3 bg-gray-200 font-semibold text-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-black">
          Cancel
        </CloseButton>
        <SubmitButton fetching={fetching} />
      </div>
    </form>
  );
};

/* -------------------------------------------------------------------------- */
/*                               CreateNewWallet                              */
/* -------------------------------------------------------------------------- */

type CreateNewWalletProps = {
  id?: string;
  defaultValues?: WalletFormValues;
};

const defaultFromValues: WalletFormValues = {
  name: "",
  color: "gray",
  icon: "💰",
  initialBalance: "0",
};

const CreateNewWallet: React.VFC<CreateNewWalletProps> = ({
  defaultValues = defaultFromValues,
}) => {
  const dialogContext = useDialog();
  const methods = useForm<WalletFormValues>({
    defaultValues,
  });

  return (
    <DialogProvider value={dialogContext}>
      <Dialog {...dialogContext}>
        <DialogTrigger
          type="button"
          className="flex items-center space-x-3 px-6 py-3 bg-blue-600 font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring"
        >
          <BiPlus className="w-5 h-5" />
          <p className="text-base">Create new wallet</p>
        </DialogTrigger>
        <DialogOverlay className="dialog-overlay" />
        <DialogContent className="dialog-content w-full overflow-hidden">
          <FormProvider {...methods}>
            <NewWalletForm />
          </FormProvider>
        </DialogContent>
      </Dialog>
    </DialogProvider>
  );
};

export { CreateNewWallet };
