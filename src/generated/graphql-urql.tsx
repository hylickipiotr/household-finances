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
  Json: any;
};

export type CategoryCreateNestedManyWithoutTransactionsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutTransactionsInput>>;
  create?: Maybe<Array<CategoryCreateWithoutTransactionsInput>>;
};

export type CategoryCreateOrConnectWithoutTransactionsInput = {
  create: CategoryCreateWithoutTransactionsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutTransactionsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  strategy: Scalars['Json'];
  type: Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  icon?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<EnumTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  strategy?: Maybe<Scalars['Json']>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutTransactionsInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutTransactionsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CategoryCreateOrConnectWithoutTransactionsInput>>;
  create?: Maybe<Array<CategoryCreateWithoutTransactionsInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutTransactionsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereWithoutTransactionsInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutTransactionsInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutTransactionsInput = {
  data: CategoryUpdateWithoutTransactionsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutTransactionsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  strategy?: Maybe<Scalars['Json']>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutTransactionsInput = {
  create: CategoryCreateWithoutTransactionsInput;
  update: CategoryUpdateWithoutTransactionsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereUniqueInput = {
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type EnumTypeFieldUpdateOperationsInput = {
  set?: Maybe<Type>;
};

export type EnumTypeFilter = {
  equals?: Maybe<Type>;
  in?: Maybe<Array<Type>>;
  not?: Maybe<NestedEnumTypeFilter>;
  notIn?: Maybe<Array<Type>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};


export type Mutation = {
  createOneWallet: Wallet;
  deleteOneWallet?: Maybe<Wallet>;
  updateOneWallet?: Maybe<Wallet>;
};


export type MutationCreateOneWalletArgs = {
  data: WalletCreateInput;
};


export type MutationDeleteOneWalletArgs = {
  where: WalletWhereUniqueInput;
};


export type MutationUpdateOneWalletArgs = {
  data: WalletUpdateInput;
  where: WalletWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumTypeFilter = {
  equals?: Maybe<Type>;
  in?: Maybe<Array<Type>>;
  not?: Maybe<NestedEnumTypeFilter>;
  notIn?: Maybe<Array<Type>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Query = {
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type QueryWalletArgs = {
  where: WalletWhereUniqueInput;
};


export type QueryWalletsArgs = {
  cursor?: Maybe<WalletWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type TransactionCreateManyWalletInput = {
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionCreateManyWalletInputEnvelope = {
  data?: Maybe<Array<TransactionCreateManyWalletInput>>;
};

export type TransactionCreateNestedManyWithoutWalletInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutWalletInput>>;
  create?: Maybe<Array<TransactionCreateWithoutWalletInput>>;
  createMany?: Maybe<TransactionCreateManyWalletInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutWalletInput = {
  create: TransactionCreateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutWalletInput = {
  amount?: Maybe<Scalars['Float']>;
  categories?: Maybe<CategoryCreateNestedManyWithoutTransactionsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionScalarWhereInput = {
  AND?: Maybe<Array<TransactionScalarWhereInput>>;
  NOT?: Maybe<Array<TransactionScalarWhereInput>>;
  OR?: Maybe<Array<TransactionScalarWhereInput>>;
  amount?: Maybe<FloatFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<EnumTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  walletId?: Maybe<StringFilter>;
};

export type TransactionUpdateManyMutationInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutWalletInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutWalletInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutWalletInput>>;
  create?: Maybe<Array<TransactionCreateWithoutWalletInput>>;
  createMany?: Maybe<TransactionCreateManyWalletInputEnvelope>;
  delete?: Maybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TransactionScalarWhereInput>>;
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>;
  set?: Maybe<Array<TransactionWhereUniqueInput>>;
  update?: Maybe<Array<TransactionUpdateWithWhereUniqueWithoutWalletInput>>;
  updateMany?: Maybe<Array<TransactionUpdateManyWithWhereWithoutWalletInput>>;
  upsert?: Maybe<Array<TransactionUpsertWithWhereUniqueWithoutWalletInput>>;
};

export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
  data: TransactionUpdateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutWalletInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutTransactionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
  create: TransactionCreateWithoutWalletInput;
  update: TransactionUpdateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum Type {
  Expense = 'EXPENSE',
  Income = 'INCOME'
}

export type Wallet = {
  color: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['String'];
  initialBalance: Scalars['Float'];
  name: Scalars['String'];
};

export type WalletCreateInput = {
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  initialBalance: Scalars['Float'];
  name: Scalars['String'];
  transaction?: Maybe<TransactionCreateNestedManyWithoutWalletInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WalletUpdateInput = {
  color?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  initialBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  transaction?: Maybe<TransactionUpdateManyWithoutWalletInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WalletWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type WalletSnippetFragment = Pick<Wallet, 'id' | 'name' | 'icon' | 'color' | 'initialBalance'>;

export type CreateWalletMutationVariables = Exact<{
  data: WalletCreateInput;
}>;


export type CreateWalletMutation = { createOneWallet: WalletSnippetFragment };

export type DeleteWalletMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteWalletMutation = { deleteOneWallet?: Maybe<Pick<Wallet, 'id'>> };

export type UpdateWalletMutationVariables = Exact<{
  id: Scalars['String'];
  data: WalletUpdateInput;
}>;


export type UpdateWalletMutation = { updateOneWallet?: Maybe<WalletSnippetFragment> };

export type WalletQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type WalletQuery = { wallet?: Maybe<WalletSnippetFragment> };

export type WalletsQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletsQuery = { wallets: Array<WalletSnippetFragment> };

export const WalletSnippetFragmentDoc = gql`
    fragment WalletSnippet on Wallet {
  id
  name
  icon
  color
  initialBalance
}
    `;
export const CreateWalletDocument = gql`
    mutation CreateWallet($data: WalletCreateInput!) {
  createOneWallet(data: $data) {
    ...WalletSnippet
  }
}
    ${WalletSnippetFragmentDoc}`;

export function useCreateWalletMutation() {
  return Urql.useMutation<CreateWalletMutation, CreateWalletMutationVariables>(CreateWalletDocument);
};
export const DeleteWalletDocument = gql`
    mutation DeleteWallet($id: String!) {
  deleteOneWallet(where: {id: $id}) {
    id
  }
}
    `;

export function useDeleteWalletMutation() {
  return Urql.useMutation<DeleteWalletMutation, DeleteWalletMutationVariables>(DeleteWalletDocument);
};
export const UpdateWalletDocument = gql`
    mutation UpdateWallet($id: String!, $data: WalletUpdateInput!) {
  updateOneWallet(data: $data, where: {id: $id}) {
    ...WalletSnippet
  }
}
    ${WalletSnippetFragmentDoc}`;

export function useUpdateWalletMutation() {
  return Urql.useMutation<UpdateWalletMutation, UpdateWalletMutationVariables>(UpdateWalletDocument);
};
export const WalletDocument = gql`
    query Wallet($id: String!) {
  wallet(where: {id: $id}) {
    ...WalletSnippet
  }
}
    ${WalletSnippetFragmentDoc}`;

export function useWalletQuery(options: Omit<Urql.UseQueryArgs<WalletQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WalletQuery>({ query: WalletDocument, ...options });
};
export const WalletsDocument = gql`
    query Wallets {
  wallets {
    ...WalletSnippet
  }
}
    ${WalletSnippetFragmentDoc}`;

export function useWalletsQuery(options: Omit<Urql.UseQueryArgs<WalletsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WalletsQuery>({ query: WalletsDocument, ...options });
};