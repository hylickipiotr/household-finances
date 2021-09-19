import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
import { isEqual } from "lodash";
import * as React from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button } from "src/components/Button";
import { ControlledField } from "src/components/Field/ControlledField";
import { FormGrid } from "src/components/Form";
import { ControlledInput } from "src/components/Input/ControlledInput";
import {
  CategorySnippetFragment,
  Type,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "src/generated/graphql-urql";
import { UseDialog } from "src/hooks/useDialog";
import tw from "tailwind-styled-components";
import * as yup from "yup";
import { ControlledStrategies } from "../Strategies/ControlledStrategies";
import { ControlledTypeSwitch } from "../TypeSwitch";

type CategoryFormValues = Pick<
  CategorySnippetFragment,
  "name" | "icon" | "type" | "strategies"
>;

const categorySchema = yup.object().shape({
  name: yup.string().required(),
  icon: yup.string().required(),
  type: yup.string().equals([Type.Income, Type.Expense]),
});

type CategoryDialogProps = ReturnType<UseDialog> & {
  data?: CategorySnippetFragment;
};

const CategoryDialog: React.VFC<CategoryDialogProps> = (props) => {
  const { data, open, onOpenChange } = props;
  const isNew = !data;

  const defaultValues: CategoryFormValues = data
    ? {
        name: data.name,
        icon: data.icon,
        type: data.type,
        strategies: data.strategies,
      }
    : {
        name: "",
        icon: "",
        type: Type.Expense,
        strategies: [],
      };

  const methods = useForm<CategoryFormValues>({
    defaultValues,
    resolver: yupResolver(categorySchema),
  });

  const [, createCategory] = useCreateCategoryMutation();
  const [, updateCategory] = useUpdateCategoryMutation();

  const onSubmit: SubmitHandler<CategoryFormValues> = async (values) => {
    if (isNew) {
      try {
        await createCategory({
          data: {
            name: values.name,
            icon: values.icon,
            type: values.type,
            strategies: {
              set: values.strategies,
            },
          },
        });
      } catch (err) {
        console.error("Something went wrong during creating new category");
      }
    } else {
      const { id } = data;
      try {
        await updateCategory({
          id,
          data: {
            name: {
              set: values.name,
            },
            icon: {
              set: values.icon,
            },
            type: {
              set: values.type,
            },
            strategies: {
              set: values.strategies,
            },
          },
        });
      } catch (err) {
        console.error(`Something went wrong during updating category ${id}`);
      }
    }

    onOpenChange(false);
    methods.reset();
  };

  const onError: SubmitErrorHandler<CategoryFormValues> = (err) => {
    console.log("error", err);
  };

  const handleSubmit = methods.handleSubmit(onSubmit, onError);

  const handleClose = () => {
    const values = methods.getValues();

    if (!isEqual(values, defaultValues)) {
      const answer = window.confirm(
        "Do you want to close? Changes you made may not be save."
      );
      if (!answer) return;
    }
    onOpenChange(false);
    methods.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <StyledOverlay />
      <StyledContent>
        <FormProvider {...methods}>
          <StyledTitle>{isNew ? "New category" : "Edit category"}</StyledTitle>
          <StyledForm onSubmit={handleSubmit}>
            <ControlledField name="name" label="Name" className="col-span-12">
              <ControlledInput name="name" />
            </ControlledField>
            <ControlledField name="icon" label="Icon" className="col-span-4">
              <ControlledInput name="icon" />
            </ControlledField>
            <ControlledField
              name="type"
              label="Transactions type"
              className="col-span-8"
            >
              <ControlledTypeSwitch name="type" />
            </ControlledField>
            <ControlledField
              name="strategies"
              label="Strategies"
              className="col-span-12"
            >
              <ControlledStrategies name="strategies" />
            </ControlledField>
          </StyledForm>
          <StyledActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="primary" onClick={handleSubmit}>
              {isNew ? "Create" : "Save"}
            </Button>
          </StyledActions>
        </FormProvider>
      </StyledContent>
    </Dialog>
  );
};

const StyledOverlay = tw(DialogOverlay)`
dialog-overlay
`;

const StyledContent = tw(DialogContent)`
dialog-content
w-full
overflow-hidden
px-6
pt-8
pb-4
`;

const StyledTitle = tw.p`
text-2xl
font-semibold
`;

const StyledForm = tw(FormGrid)`
mt-8
`;

const StyledActions = tw.div`
mt-12
flex
justify-end
space-x-3
`;

export { CategoryDialog };
