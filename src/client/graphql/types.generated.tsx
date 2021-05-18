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

export type EnumTransactionTypeFieldUpdateOperationsInput = {
  set?: Maybe<TransactionType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneTransaction: Transaction;
  updateOneTransaction?: Maybe<Transaction>;
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationUpdateOneTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
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

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TransactionWhereUniqueInput>;
  after?: Maybe<TransactionWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
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
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type TagCreateNestedOneWithoutTransactionsInput = {
  create?: Maybe<TagCreateWithoutTransactionsInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutTransactionsInput>;
  connect?: Maybe<TagWhereUniqueInput>;
};

export type TagCreateOrConnectWithoutTransactionsInput = {
  where: TagWhereUniqueInput;
  create: TagCreateWithoutTransactionsInput;
};

export type TagCreateWithoutTransactionsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagUpdateOneRequiredWithoutTransactionsInput = {
  create?: Maybe<TagCreateWithoutTransactionsInput>;
  connectOrCreate?: Maybe<TagCreateOrConnectWithoutTransactionsInput>;
  upsert?: Maybe<TagUpsertWithoutTransactionsInput>;
  connect?: Maybe<TagWhereUniqueInput>;
  update?: Maybe<TagUpdateWithoutTransactionsInput>;
};

export type TagUpdateWithoutTransactionsInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithoutTransactionsInput = {
  update: TagUpdateWithoutTransactionsInput;
  create: TagCreateWithoutTransactionsInput;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTime']>;
  type: TransactionType;
  isFavourite?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionCreateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  type: TransactionType;
  date?: Maybe<Scalars['DateTime']>;
  note?: Maybe<Scalars['String']>;
  isFavourite?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<TransactionTagsCreateNestedManyWithoutTransactionInput>;
};

export type TransactionTagsCreateManyTransactionInput = {
  tagId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionTagsCreateManyTransactionInputEnvelope = {
  data?: Maybe<Array<TransactionTagsCreateManyTransactionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransactionTagsCreateNestedManyWithoutTransactionInput = {
  create?: Maybe<Array<TransactionTagsCreateWithoutTransactionInput>>;
  connectOrCreate?: Maybe<Array<TransactionTagsCreateOrConnectWithoutTransactionInput>>;
  createMany?: Maybe<TransactionTagsCreateManyTransactionInputEnvelope>;
  connect?: Maybe<Array<TransactionTagsWhereUniqueInput>>;
};

export type TransactionTagsCreateOrConnectWithoutTransactionInput = {
  where: TransactionTagsWhereUniqueInput;
  create: TransactionTagsCreateWithoutTransactionInput;
};

export type TransactionTagsCreateWithoutTransactionInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutTransactionsInput;
};

export type TransactionTagsScalarWhereInput = {
  AND?: Maybe<Array<TransactionTagsScalarWhereInput>>;
  OR?: Maybe<Array<TransactionTagsScalarWhereInput>>;
  NOT?: Maybe<Array<TransactionTagsScalarWhereInput>>;
  transactionId?: Maybe<StringFilter>;
  tagId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TransactionTagsTransactionIdTagIdCompoundUniqueInput = {
  transactionId: Scalars['String'];
  tagId: Scalars['String'];
};

export type TransactionTagsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionTagsUpdateManyWithWhereWithoutTransactionInput = {
  where: TransactionTagsScalarWhereInput;
  data: TransactionTagsUpdateManyMutationInput;
};

export type TransactionTagsUpdateManyWithoutTransactionInput = {
  create?: Maybe<Array<TransactionTagsCreateWithoutTransactionInput>>;
  connectOrCreate?: Maybe<Array<TransactionTagsCreateOrConnectWithoutTransactionInput>>;
  upsert?: Maybe<Array<TransactionTagsUpsertWithWhereUniqueWithoutTransactionInput>>;
  createMany?: Maybe<TransactionTagsCreateManyTransactionInputEnvelope>;
  connect?: Maybe<Array<TransactionTagsWhereUniqueInput>>;
  set?: Maybe<Array<TransactionTagsWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransactionTagsWhereUniqueInput>>;
  delete?: Maybe<Array<TransactionTagsWhereUniqueInput>>;
  update?: Maybe<Array<TransactionTagsUpdateWithWhereUniqueWithoutTransactionInput>>;
  updateMany?: Maybe<Array<TransactionTagsUpdateManyWithWhereWithoutTransactionInput>>;
  deleteMany?: Maybe<Array<TransactionTagsScalarWhereInput>>;
};

export type TransactionTagsUpdateWithWhereUniqueWithoutTransactionInput = {
  where: TransactionTagsWhereUniqueInput;
  data: TransactionTagsUpdateWithoutTransactionInput;
};

export type TransactionTagsUpdateWithoutTransactionInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  tag?: Maybe<TagUpdateOneRequiredWithoutTransactionsInput>;
};

export type TransactionTagsUpsertWithWhereUniqueWithoutTransactionInput = {
  where: TransactionTagsWhereUniqueInput;
  update: TransactionTagsUpdateWithoutTransactionInput;
  create: TransactionTagsCreateWithoutTransactionInput;
};

export type TransactionTagsWhereUniqueInput = {
  transactionId_tagId?: Maybe<TransactionTagsTransactionIdTagIdCompoundUniqueInput>;
};

export enum TransactionType {
  Income = 'INCOME',
  Expense = 'EXPENSE'
}

export type TransactionUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  amount?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  type?: Maybe<EnumTransactionTypeFieldUpdateOperationsInput>;
  date?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  note?: Maybe<NullableStringFieldUpdateOperationsInput>;
  isFavourite?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  tags?: Maybe<TransactionTagsUpdateManyWithoutTransactionInput>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TransactionSnippetFragment = (
  { __typename?: 'Transaction' }
  & Pick<Transaction, 'id' | 'name' | 'amount' | 'date' | 'type' | 'isFavourite' | 'note' | 'createdAt' | 'updatedAt'>
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

export type TransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & TransactionSnippetFragment
  )> }
);

export const TransactionSnippetFragmentDoc = gql`
    fragment TransactionSnippet on Transaction {
  id
  name
  amount
  date
  type
  isFavourite
  note
  createdAt
  updatedAt
}
    `;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($data: TransactionCreateInput!) {
  createOneTransaction(data: $data) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useCreateTransactionMutation() {
  return Urql.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument);
}
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($id: String!, $data: TransactionUpdateInput!) {
  updateOneTransaction(where: {id: $id}, data: $data) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useUpdateTransactionMutation() {
  return Urql.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument);
}
export const TransactionDocument = gql`
    query Transaction($id: String!) {
  transaction(where: {id: $id}) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useTransactionQuery(options: Omit<Urql.UseQueryArgs<TransactionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionQuery>({ query: TransactionDocument, ...options });
}
export const TransactionsDocument = gql`
    query Transactions {
  transactions {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useTransactionsQuery(options: Omit<Urql.UseQueryArgs<TransactionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionsQuery>({ query: TransactionsDocument, ...options });
}