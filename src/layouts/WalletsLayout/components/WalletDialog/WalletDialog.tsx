import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { isEqual } from "lodash";
import { useRouter } from "next/router";
import * as React from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ControlledColorSelect } from "src/components/ColorSelect/ControlledColorSelect";
import { ControlledCurrencyInput } from "src/components/CurrencyInput";
import { ControlledField } from "src/components/Field/ControlledField";
import { FormGrid } from "src/components/Form";
import { ControlledInput } from "src/components/Input/ControlledInput";
import { useDialogContext } from "src/contexts/Dialog";
import {
  useCreateWalletMutation,
  useUpdateWalletMutation,
} from "src/generated/graphql-urql";
import { Wallet } from "src/types/Wallet";
import * as yup from "yup";

type WalletFormValues = Pick<Wallet, "name" | "icon" | "color"> & {
  initialBalance: string;
};

type WalletDialogProps = {
  id?: string;
  defaultValues?: WalletFormValues;
};

const formSchema = yup.object().shape({
  name: yup.string().required(),
  color: yup.string().required(),
  icon: yup.string().required(),
  initialBalance: yup.string().required(),
});

const defaultFromValues: WalletFormValues = {
  name: "",
  color: "gray",
  icon: "🤑",
  initialBalance: "0",
};

const WalletDialog: React.VFC<WalletDialogProps> = ({
  id,
  defaultValues = defaultFromValues,
}) => {
  const router = useRouter();
  const { open, onOpenChange } = useDialogContext();
  const methods = useForm<WalletFormValues>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });
  const { handleSubmit, getValues, reset } = methods;
  const [, createWallet] = useCreateWalletMutation();
  const [, updateWallet] = useUpdateWalletMutation();

  const handleClose = () => {
    const values = getValues();
    if (!isEqual(values, defaultFromValues)) {
      const answer = window.confirm(
        "Do you want to close? Changes you made may not be save."
      );
      if (!answer) return;
    }
    onOpenChange(false);
    reset();
  };

  const onSubmit: SubmitHandler<WalletFormValues> = async (values) => {
    try {
      if (!id) {
        const { data } = await createWallet({
          data: {
            ...values,
            initialBalance: Number(
              values.initialBalance.replace(" ", "").replace(",", ".")
            ),
          },
        });
        onOpenChange(false);
        reset();
        if (data) {
          router.push(`wallets/${data.createOneWallet.id}`);
        }
      } else {
        await updateWallet({
          id,
          data: {
            color: {
              set: values.color,
            },
            icon: {
              set: values.icon,
            },
            name: {
              set: values.name,
            },
            initialBalance: {
              set: Number(
                values.initialBalance.replace(" ", "").replace(",", ".")
              ),
            },
          },
        });
        onOpenChange(false);
        reset();
      }
    } catch (err) {
      console.log("Create or update wallet error:", err);
    }
  };

  const onError: SubmitErrorHandler<WalletFormValues> = (err) => {
    console.log("Submit error:", err);
  };

  React.useEffect(() => {
    methods.setFocus("name");
  }, [open]);

  return (
    <FormProvider {...methods}>
      <div className="space-y-8">
        <div className="flex items-end justify-between px-6 pt-8">
          <h1 className="text-2xl font-semibold">Create wallet</h1>
        </div>
        <FormGrid className="px-6">
          <ControlledField name="name" label="Name" className="col-span-12">
            <ControlledInput name="name" maxLength={60} />
          </ControlledField>
          <ControlledField name="icon" label="Icon" className="col-span-6">
            <ControlledInput name="icon" />
          </ControlledField>
          <ControlledField name="color" label="Color" className="col-span-6">
            <ControlledColorSelect name="color" />
          </ControlledField>
          <ControlledField
            name="initialBalance"
            label="Initial balance"
            className="col-span-6"
          >
            <ControlledCurrencyInput name="initialBalance" />
          </ControlledField>
        </FormGrid>
        <div className="flex items-center px-6 py-4 justify-end space-x-3 border-t border-gray-300">
          <button
            type="button"
            className="flex items-center space-x-3 px-6 py-3 bg-gray-200 font-semibold text-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-black"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className={clsx(
              "flex items-center px-6 py-3 bg-blue-600 font-semibold text-white rounded-lg shadow-md focus:outline-none focus:ring disabled:bg-blue-300 disabled:cursor-default"
            )}
            onClick={handleSubmit(onSubmit, onError)}
          >
            Create
          </button>
        </div>
      </div>
    </FormProvider>
  );
};

export { WalletDialog };
export type { WalletFormValues };
