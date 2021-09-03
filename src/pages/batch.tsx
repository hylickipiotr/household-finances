/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import dayjs from "dayjs";
import { NextPage } from "next";
import { parse } from "papaparse";
import React, { FormEventHandler, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { HiOutlineTrash, HiX } from "react-icons/hi";
import { Layout, LayoutHeader, LayoutMain } from "src/client/components/Layout";
import { useCreateTransactionMutation } from "src/client/graphql/types.generated";
import tw from "tailwind-styled-components";

const StyledWrapper = tw.div`
  max-w-xl
  w-full
  mx-auto
`;

const StyledBatchTextarea = tw.textarea`
  form-textarea
  w-full
  
`;

const StyledButton = tw.button`
  inline-flex
  items-center
  px-3 
  py-1.5
  bg-gray-300
  text-gray-700
  text-sm
  font-semibold
  rounded-md
  hover:bg-gray-200
`;

const StyledList = tw.ul`
  space-y-3
`;

const StyledListRow = tw.li`
  bg-transparent
  group
  flex
  items-center
  space-x-3
`;

const StyledFieldInput = tw.input`
  form-input
  text-sm
`;

const StyledTitleInput = tw(StyledFieldInput)`
  w-72
`;

const StyledAmountInput = tw(CurrencyInput)`
  form-input
  text-sm
  w-24
  text-right
`;

const StyledDescriptionInput = tw(StyledFieldInput)`
  w-96
`;

const StyledMonthInput = tw(StyledFieldInput)`
  w-48
`;

const StyledTypeSelect = tw.select`
  form-select
  w-32
`;

const StyledListWrapper = tw.div`
  space-y-4
`;

const StyledLisActions = tw.div`
  flex 
  justify-between
  items-center
  pb-3
  space-x-3
  border-b
  border-gray-300
`;

const StyledRemoveButton = tw.button`
  flex
  items-center justify-center
  w-[38px] h-[38px]
  bg-transparent
  hover:bg-gray-100
  rounded-md
  flex-shrink-0
`;

const StyledIconButton = tw.button`
  absolute
  inline-flex
  justify-center
  items-center
  w-7
  h-7
  top-2.5
  right-2.5
  bg-transparent
  hover:bg-gray-100
  focus:ring
  focus:ring-blue-500
`;

const StyledDialogContent = tw(DialogContent)`
  fixed
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  w-[90vw]
  max-w-md
  max-h-[85vh]
  p-6
  bg-white
  rounded-md
  shadow-3xl
  focus:outline-none
`;

const StyledDialogOverlay = tw(DialogOverlay)`
  fixed
  bg-gray-900
  bg-opacity-70
  inset-0
`;

const StyledDialogTitle = tw(DialogTitle)`
  m-0
  font-medium
  text-base
  text-gray-900
`;

const StyledDialogDescription = tw(DialogDescription)`
  mt-2.5
  mb-5
  text-gray-500
  text-sm
`;

type TransactionBatchFormValue = {
  title: string;
  amount: number;
  month: string;
  description: string;
  type: "expense" | "income";
};

type BatchFormValue = {
  plain: string;
  transactions: TransactionBatchFormValue[];
};

const ChangeMany = () => {
  const [open, setOpen] = useState(false);
  const { getValues, setValue } = useFormContext<BatchFormValue>();
  const handelSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const transactions = getValues("transactions");

    const newTransactions = transactions.map((transaction) => ({
      ...transaction,
      // @ts-ignore
      month: e.target.elements.month.value
        ? // @ts-ignore
          e.target.elements.month.value
        : transaction.month,
      type:
        // @ts-ignore
        e.target.elements.type.value
          ? // @ts-ignore
            e.target.elements.type.value
          : transaction.type,
    }));

    setValue("transactions", newTransactions);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger as={StyledButton}>Edycja zbiorcza</DialogTrigger>
      <StyledDialogOverlay />
      <StyledDialogContent>
        <StyledDialogTitle>Edycja zbiorcza</StyledDialogTitle>
        <StyledDialogDescription>
          Zmień parametry wielu transackiom jednocześnie.
        </StyledDialogDescription>
        <form className="space-y-4" onSubmit={handelSubmit}>
          <div className="space-y-1">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="month"
              className="block text-sm font-semibold text-gray-900"
            >
              Miesiąc
            </label>
            <StyledMonthInput id="month" name="month" type="month" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-900">Typ</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1">
                <input type="radio" name="type" value="" />
                <span>Bez zmian</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="type" value="income" />
                <span>Przychód</span>
              </label>
              <label className="flex items-center space-x-1">
                <input type="radio" name="type" value="expense" />
                <span>Wydatek</span>
              </label>
            </div>
          </div>
          <StyledButton type="submit">Zmień</StyledButton>
        </form>
        <DialogClose as={StyledIconButton}>
          <HiX />
        </DialogClose>
      </StyledDialogContent>
    </Dialog>
  );
};

const Batch: NextPage = () => {
  const [{ fetching }, createTransaction] = useCreateTransactionMutation();
  const methods = useForm<BatchFormValue>();
  const { control, register, getValues, setValue } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "transactions",
  });

  const handelProcess = () => {
    setValue("transactions", []);
    const value = getValues("plain");
    const { data } = parse<[string, string]>(value, {
      delimiter: "\t",
      header: false,
    });

    const formattedData = data.map(([title, amount]) => {
      const res: TransactionBatchFormValue = {
        title,
        amount: Number(
          amount
            .replace(" ", "")
            .replace(" ", "")
            .replace("zł", "")
            .replace(",", ".")
        ),
        description: "",
        month: dayjs().format("YYYY-MM"),
        type: "expense",
      };

      return res;
    });

    append(formattedData);
  };

  const handleSave = async () => {
    getValues("transactions").forEach(async (transaction) => {
      try {
        const result = await createTransaction({
          data: {
            title: transaction.title,
            amount: transaction.amount,
            date: dayjs(transaction.month, "YYYY-MM", "pl", true).toISOString(),
            category: {
              connect: {
                id: "cksar9x6b9706oynbsg05b1y8",
              },
            },
            isIncome: transaction.type === "income",
            description: transaction.description,
          },
        });
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <Layout>
      <LayoutHeader />
      <LayoutMain className="space-y-6">
        {!fields.length ? (
          <StyledWrapper>
            <StyledBatchTextarea {...register("plain")} />
            <StyledButton onClick={handelProcess}>Przetwórz</StyledButton>
          </StyledWrapper>
        ) : (
          <FormProvider {...methods}>
            <StyledListWrapper>
              <StyledLisActions>
                <ChangeMany />
                <StyledButton onClick={handleSave}>Zapisz</StyledButton>
              </StyledLisActions>
              <StyledList>
                {fields.map((field, index) => (
                  <StyledListRow key={field.id}>
                    <StyledTitleInput
                      required
                      placeholder="Tytuł"
                      type="text"
                      {...register(`transactions.${index}.title`)}
                      defaultValue={field.title}
                      className="w-48"
                    />
                    <StyledAmountInput
                      required
                      placeholder="Kwota"
                      allowDecimals
                      allowNegativeValue={false}
                      intlConfig={{
                        locale: "pl-PL",
                        currency: "PLN",
                      }}
                      onValueChange={(value) => {
                        setValue(`transactions.${index}.amount`, Number(value));
                      }}
                      defaultValue={field.amount}
                      decimalScale={2}
                    />
                    <StyledDescriptionInput
                      type="text"
                      placeholder="Opis"
                      {...register(`transactions.${index}.description`)}
                      defaultValue={field.description}
                    />
                    <StyledTypeSelect
                      defaultValue={field.type}
                      {...register(`transactions.${index}.type`)}
                    >
                      <option value="income">Przychód</option>
                      <option value="expense">Wydatek</option>
                    </StyledTypeSelect>
                    <StyledMonthInput
                      required
                      type="month"
                      placeholder="Data"
                      {...register(`transactions.${index}.month`)}
                      defaultValue={field.month}
                    />
                    <StyledRemoveButton
                      onClick={() => remove(index)}
                      type="button"
                    >
                      <HiOutlineTrash />
                    </StyledRemoveButton>
                  </StyledListRow>
                ))}
              </StyledList>
            </StyledListWrapper>
          </FormProvider>
        )}
      </LayoutMain>
    </Layout>
  );
};

export default Batch;
