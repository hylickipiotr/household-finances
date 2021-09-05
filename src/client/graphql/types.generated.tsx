import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
};

export type CategoryCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  Transaction?: Maybe<TransactionCreateNestedManyWithoutCategoryInput>;
};

export type CategoryCreateNestedOneWithoutTransactionInput = {
  create?: Maybe<CategoryCreateWithoutTransactionInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutTransactionInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
};

export type CategoryCreateOrConnectWithoutTransactionInput = {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateWithoutTransactionInput;
};

export type CategoryCreateWithoutTransactionInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
};

export type CategoryUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  icon?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Transaction?: Maybe<TransactionUpdateManyWithoutCategoryInput>;
};

export type CategoryUpdateOneRequiredWithoutTransactionInput = {
  create?: Maybe<CategoryCreateWithoutTransactionInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutTransactionInput>;
  upsert?: Maybe<CategoryUpsertWithoutTransactionInput>;
  connect?: Maybe<CategoryWhereUniqueInput>;
  update?: Maybe<CategoryUpdateWithoutTransactionInput>;
};

export type CategoryUpdateWithoutTransactionInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  icon?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutTransactionInput = {
  update: CategoryUpdateWithoutTransactionInput;
  create: CategoryCreateWithoutTransactionInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  icon?: Maybe<StringNullableFilter>;
  Transaction?: Maybe<TransactionListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneTransaction: Transaction;
  updateOneTransaction?: Maybe<Transaction>;
  createOneCategory: Category;
  updateOneCategory?: Maybe<Category>;
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationUpdateOneTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  categories: Array<Category>;
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<Array<TransactionOrderByInput>>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TransactionWhereUniqueInput>;
  after?: Maybe<TransactionWhereUniqueInput>;
};


export type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<CategoryWhereUniqueInput>;
  after?: Maybe<CategoryWhereUniqueInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  date: Scalars['DateTime'];
  isIncome: Scalars['Boolean'];
  category: Category;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionCreateInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  amount: Scalars['Float'];
  isIncome: Scalars['Boolean'];
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  category: CategoryCreateNestedOneWithoutTransactionInput;
};

export type TransactionCreateNestedManyWithoutCategoryInput = {
  create?: Maybe<Array<TransactionCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCategoryInput>>;
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
};

export type TransactionCreateOrConnectWithoutCategoryInput = {
  where: TransactionWhereUniqueInput;
  create: TransactionCreateWithoutCategoryInput;
};

export type TransactionCreateWithoutCategoryInput = {
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  amount: Scalars['Float'];
  isIncome: Scalars['Boolean'];
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionListRelationFilter = {
  every?: Maybe<TransactionWhereInput>;
  some?: Maybe<TransactionWhereInput>;
  none?: Maybe<TransactionWhereInput>;
};

export type TransactionOrderByInput = {
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  amount?: Maybe<SortOrder>;
  isIncome?: Maybe<SortOrder>;
  date?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
};

export type TransactionScalarWhereInput = {
  AND?: Maybe<Array<TransactionScalarWhereInput>>;
  OR?: Maybe<Array<TransactionScalarWhereInput>>;
  NOT?: Maybe<Array<TransactionScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  isIncome?: Maybe<BoolFilter>;
  date?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type TransactionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isIncome?: Maybe<BoolFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutTransactionInput>;
};

export type TransactionUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isIncome?: Maybe<BoolFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
  where: TransactionScalarWhereInput;
  data: TransactionUpdateManyMutationInput;
};

export type TransactionUpdateManyWithoutCategoryInput = {
  create?: Maybe<Array<TransactionCreateWithoutCategoryInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCategoryInput>>;
  upsert?: Maybe<Array<TransactionUpsertWithWhereUniqueWithoutCategoryInput>>;
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  set?: Maybe<Array<TransactionWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>;
  delete?: Maybe<Array<TransactionWhereUniqueInput>>;
  update?: Maybe<Array<TransactionUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<TransactionUpdateManyWithWhereWithoutCategoryInput>>;
  deleteMany?: Maybe<Array<TransactionScalarWhereInput>>;
};

export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateWithoutCategoryInput;
};

export type TransactionUpdateWithoutCategoryInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  isIncome?: Maybe<BoolFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
  where: TransactionWhereUniqueInput;
  update: TransactionUpdateWithoutCategoryInput;
  create: TransactionCreateWithoutCategoryInput;
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<TransactionWhereInput>>;
  OR?: Maybe<Array<TransactionWhereInput>>;
  NOT?: Maybe<Array<TransactionWhereInput>>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  amount?: Maybe<FloatFilter>;
  isIncome?: Maybe<BoolFilter>;
  date?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  category?: Maybe<CategoryWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  categoryId?: Maybe<StringFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CategorySnippetFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name' | 'icon'>
);

export type TransactionSnippetFragment = (
  { __typename?: 'Transaction' }
  & Pick<Transaction, 'id' | 'title' | 'description' | 'amount' | 'date' | 'isIncome' | 'createdAt'>
  & { category: (
    { __typename?: 'Category' }
    & CategorySnippetFragment
  ) }
);

export type CreateTransactionMutationVariables = Exact<{
  data: TransactionCreateInput;
}>;


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { createOneTransaction: (
    { __typename?: 'Transaction' }
    & TransactionSnippetFragment
  ) }
);

export type UpdateTransactionMutationVariables = Exact<{
  id: Scalars['String'];
  data: TransactionUpdateInput;
}>;


export type UpdateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneTransaction?: Maybe<(
    { __typename?: 'Transaction' }
    & TransactionSnippetFragment
  )> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & CategorySnippetFragment
  )> }
);

export type TransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TransactionQuery = (
  { __typename?: 'Query' }
  & { transaction?: Maybe<(
    { __typename?: 'Transaction' }
    & TransactionSnippetFragment
  )> }
);

export type TransactionsQueryVariables = Exact<{
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<Array<TransactionOrderByInput> | TransactionOrderByInput>;
}>;


export type TransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & TransactionSnippetFragment
  )> }
);

export const CategorySnippetFragmentDoc = gql`
    fragment CategorySnippet on Category {
  id
  name
  icon
}
    `;
export const TransactionSnippetFragmentDoc = gql`
    fragment TransactionSnippet on Transaction {
  id
  title
  description
  amount
  date
  isIncome
  createdAt
  category {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($data: TransactionCreateInput!) {
  createOneTransaction(data: $data) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useCreateTransactionMutation() {
  return Urql.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument);
};
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($id: String!, $data: TransactionUpdateInput!) {
  updateOneTransaction(where: {id: $id}, data: $data) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useUpdateTransactionMutation() {
  return Urql.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument);
};
export const CategoriesDocument = gql`
    query Categories {
  categories {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;

export function useCategoriesQuery(options: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const TransactionDocument = gql`
    query Transaction($id: String!) {
  transaction(where: {id: $id}) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useTransactionQuery(options: Omit<Urql.UseQueryArgs<TransactionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionQuery>({ query: TransactionDocument, ...options });
};
export const TransactionsDocument = gql`
    query Transactions($where: TransactionWhereInput, $orderBy: [TransactionOrderByInput!]) {
  transactions(where: $where, orderBy: $orderBy) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useTransactionsQuery(options: Omit<Urql.UseQueryArgs<TransactionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionsQuery>({ query: TransactionsDocument, ...options });
};