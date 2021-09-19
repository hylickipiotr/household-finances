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

export type Category = {
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  strategies: Array<Scalars['String']>;
  type: Type;
};

export type CategoryCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  strategies?: Maybe<CategoryCreatestrategiesInput>;
  transactions?: Maybe<TransactionCreateNestedManyWithoutCategoriesInput>;
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  strategies?: Maybe<CategoryCreatestrategiesInput>;
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreatestrategiesInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  strategies?: Maybe<SortOrder>;
  transactions?: Maybe<TransactionOrderByRelationAggregateInput>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  icon?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  strategies?: Maybe<StringNullableListFilter>;
  type?: Maybe<EnumTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  strategies?: Maybe<CategoryUpdatestrategiesInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutCategoriesInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  strategies?: Maybe<CategoryUpdatestrategiesInput>;
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
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  strategies?: Maybe<CategoryUpdatestrategiesInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdatestrategiesInput = {
  push?: Maybe<Scalars['String']>;
  set?: Maybe<Array<Scalars['String']>>;
};

export type CategoryUpsertWithWhereUniqueWithoutTransactionsInput = {
  create: CategoryCreateWithoutTransactionsInput;
  update: CategoryUpdateWithoutTransactionsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  icon?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  strategies?: Maybe<StringNullableListFilter>;
  transactions?: Maybe<TransactionListRelationFilter>;
  type?: Maybe<EnumTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Color {
  Blue = 'BLUE',
  Gray = 'GRAY',
  Green = 'GREEN',
  Indigo = 'INDIGO',
  Orange = 'ORANGE',
  Pink = 'PINK',
  Purple = 'PURPLE',
  Yellow = 'YELLOW'
}


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

export type EnumColorFieldUpdateOperationsInput = {
  set?: Maybe<Color>;
};

export type EnumColorFilter = {
  equals?: Maybe<Color>;
  in?: Maybe<Array<Color>>;
  not?: Maybe<NestedEnumColorFilter>;
  notIn?: Maybe<Array<Color>>;
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
  createOneCategory: Category;
  createOneWallet: Wallet;
  deleteOneCategory?: Maybe<Category>;
  deleteOneWallet?: Maybe<Wallet>;
  updateOneCategory?: Maybe<Category>;
  updateOneWallet?: Maybe<Wallet>;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneWalletArgs = {
  data: WalletCreateInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneWalletArgs = {
  where: WalletWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
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

export type NestedEnumColorFilter = {
  equals?: Maybe<Color>;
  in?: Maybe<Array<Color>>;
  not?: Maybe<NestedEnumColorFilter>;
  notIn?: Maybe<Array<Color>>;
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
  categories: Array<Category>;
  category?: Maybe<Category>;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};


export type QueryCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
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

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
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

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
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
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransactionCreateNestedManyWithoutCategoriesInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCategoriesInput>>;
  create?: Maybe<Array<TransactionCreateWithoutCategoriesInput>>;
};

export type TransactionCreateNestedManyWithoutWalletInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutWalletInput>>;
  create?: Maybe<Array<TransactionCreateWithoutWalletInput>>;
  createMany?: Maybe<TransactionCreateManyWalletInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutCategoriesInput = {
  create: TransactionCreateWithoutCategoriesInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutWalletInput = {
  create: TransactionCreateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutCategoriesInput = {
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wallet: WalletCreateNestedOneWithoutTransactionInput;
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

export type TransactionListRelationFilter = {
  every?: Maybe<TransactionWhereInput>;
  none?: Maybe<TransactionWhereInput>;
  some?: Maybe<TransactionWhereInput>;
};

export type TransactionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
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
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutCategoriesInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutWalletInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCategoriesInput>>;
  create?: Maybe<Array<TransactionCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TransactionScalarWhereInput>>;
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>;
  set?: Maybe<Array<TransactionWhereUniqueInput>>;
  update?: Maybe<Array<TransactionUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<TransactionUpdateManyWithWhereWithoutCategoriesInput>>;
  upsert?: Maybe<Array<TransactionUpsertWithWhereUniqueWithoutCategoriesInput>>;
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

export type TransactionUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: TransactionUpdateWithoutCategoriesInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
  data: TransactionUpdateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutCategoriesInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  wallet?: Maybe<WalletUpdateOneRequiredWithoutTransactionInput>;
};

export type TransactionUpdateWithoutWalletInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutTransactionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: TransactionCreateWithoutCategoriesInput;
  update: TransactionUpdateWithoutCategoriesInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
  create: TransactionCreateWithoutWalletInput;
  update: TransactionUpdateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<TransactionWhereInput>>;
  NOT?: Maybe<Array<TransactionWhereInput>>;
  OR?: Maybe<Array<TransactionWhereInput>>;
  amount?: Maybe<FloatFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<EnumTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  wallet?: Maybe<WalletWhereInput>;
  walletId?: Maybe<StringFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum Type {
  Expense = 'EXPENSE',
  Income = 'INCOME'
}

export type Wallet = {
  color: Color;
  icon: Scalars['String'];
  id: Scalars['String'];
  initialBalance: Scalars['Float'];
  name: Scalars['String'];
};

export type WalletCreateInput = {
  color?: Maybe<Color>;
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  initialBalance?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  transaction?: Maybe<TransactionCreateNestedManyWithoutWalletInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WalletCreateNestedOneWithoutTransactionInput = {
  connect?: Maybe<WalletWhereUniqueInput>;
  connectOrCreate?: Maybe<WalletCreateOrConnectWithoutTransactionInput>;
  create?: Maybe<WalletCreateWithoutTransactionInput>;
};

export type WalletCreateOrConnectWithoutTransactionInput = {
  create: WalletCreateWithoutTransactionInput;
  where: WalletWhereUniqueInput;
};

export type WalletCreateWithoutTransactionInput = {
  color?: Maybe<Color>;
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  initialBalance?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WalletUpdateInput = {
  color?: Maybe<EnumColorFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  initialBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  transaction?: Maybe<TransactionUpdateManyWithoutWalletInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WalletUpdateOneRequiredWithoutTransactionInput = {
  connect?: Maybe<WalletWhereUniqueInput>;
  connectOrCreate?: Maybe<WalletCreateOrConnectWithoutTransactionInput>;
  create?: Maybe<WalletCreateWithoutTransactionInput>;
  update?: Maybe<WalletUpdateWithoutTransactionInput>;
  upsert?: Maybe<WalletUpsertWithoutTransactionInput>;
};

export type WalletUpdateWithoutTransactionInput = {
  color?: Maybe<EnumColorFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  initialBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WalletUpsertWithoutTransactionInput = {
  create: WalletCreateWithoutTransactionInput;
  update: WalletUpdateWithoutTransactionInput;
};

export type WalletWhereInput = {
  AND?: Maybe<Array<WalletWhereInput>>;
  NOT?: Maybe<Array<WalletWhereInput>>;
  OR?: Maybe<Array<WalletWhereInput>>;
  color?: Maybe<EnumColorFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  icon?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  initialBalance?: Maybe<FloatFilter>;
  name?: Maybe<StringFilter>;
  transaction?: Maybe<TransactionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type WalletWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CategorySnippetFragment = Pick<Category, 'id' | 'name' | 'icon' | 'type' | 'strategies'>;

export type WalletSnippetFragment = Pick<Wallet, 'id' | 'name' | 'icon' | 'color' | 'initialBalance'>;

export type CreateCategoryMutationVariables = Exact<{
  data: CategoryCreateInput;
}>;


export type CreateCategoryMutation = { createOneCategory: CategorySnippetFragment };

export type CreateWalletMutationVariables = Exact<{
  data: WalletCreateInput;
}>;


export type CreateWalletMutation = { createOneWallet: WalletSnippetFragment };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCategoryMutation = { deleteOneCategory?: Maybe<Pick<Category, 'id'>> };

export type DeleteWalletMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteWalletMutation = { deleteOneWallet?: Maybe<Pick<Wallet, 'id'>> };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String'];
  data: CategoryUpdateInput;
}>;


export type UpdateCategoryMutation = { updateOneCategory?: Maybe<CategorySnippetFragment> };

export type UpdateWalletMutationVariables = Exact<{
  id: Scalars['String'];
  data: WalletUpdateInput;
}>;


export type UpdateWalletMutation = { updateOneWallet?: Maybe<WalletSnippetFragment> };

export type CategoriesQueryVariables = Exact<{
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<Array<CategoryOrderByWithRelationInput> | CategoryOrderByWithRelationInput>;
}>;


export type CategoriesQuery = { categories: Array<CategorySnippetFragment> };

export type CategoryQueryVariables = Exact<{
  where: CategoryWhereUniqueInput;
}>;


export type CategoryQuery = { category?: Maybe<CategorySnippetFragment> };

export type WalletQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type WalletQuery = { wallet?: Maybe<WalletSnippetFragment> };

export type WalletsQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletsQuery = { wallets: Array<WalletSnippetFragment> };

export const CategorySnippetFragmentDoc = gql`
    fragment CategorySnippet on Category {
  id
  name
  icon
  type
  strategies
}
    `;
export const WalletSnippetFragmentDoc = gql`
    fragment WalletSnippet on Wallet {
  id
  name
  icon
  color
  initialBalance
}
    `;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($data: CategoryCreateInput!) {
  createOneCategory(data: $data) {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;

export function useCreateCategoryMutation() {
  return Urql.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument);
};
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
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: String!) {
  deleteOneCategory(where: {id: $id}) {
    id
  }
}
    `;

export function useDeleteCategoryMutation() {
  return Urql.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument);
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
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: String!, $data: CategoryUpdateInput!) {
  updateOneCategory(data: $data, where: {id: $id}) {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;

export function useUpdateCategoryMutation() {
  return Urql.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument);
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
export const CategoriesDocument = gql`
    query Categories($where: CategoryWhereInput, $orderBy: [CategoryOrderByWithRelationInput!]) {
  categories(where: $where, orderBy: $orderBy) {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;

export function useCategoriesQuery(options: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const CategoryDocument = gql`
    query Category($where: CategoryWhereUniqueInput!) {
  category(where: $where) {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;

export function useCategoryQuery(options: Omit<Urql.UseQueryArgs<CategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoryQuery>({ query: CategoryDocument, ...options });
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