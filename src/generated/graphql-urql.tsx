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
  transactions?: Maybe<TransactionCreateNestedManyWithoutCategoryInput>;
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateNestedOneWithoutTransactionsInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutTransactionsInput>;
  create?: Maybe<CategoryCreateWithoutTransactionsInput>;
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

export type CategoryUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  strategies?: Maybe<CategoryUpdatestrategiesInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutCategoryInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutTransactionsInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutTransactionsInput>;
  create?: Maybe<CategoryCreateWithoutTransactionsInput>;
  update?: Maybe<CategoryUpdateWithoutTransactionsInput>;
  upsert?: Maybe<CategoryUpsertWithoutTransactionsInput>;
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

export type CategoryUpsertWithoutTransactionsInput = {
  create: CategoryCreateWithoutTransactionsInput;
  update: CategoryUpdateWithoutTransactionsInput;
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
  createOneTransaction: Transaction;
  createOneWallet: Wallet;
  deleteOneCategory?: Maybe<Category>;
  deleteOneTransaction?: Maybe<Transaction>;
  deleteOneWallet?: Maybe<Wallet>;
  updateOneCategory?: Maybe<Category>;
  updateOneTransaction?: Maybe<Transaction>;
  updateOneWallet?: Maybe<Wallet>;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationCreateOneWalletArgs = {
  data: WalletCreateInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationDeleteOneWalletArgs = {
  where: WalletWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
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

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  categories: Array<Category>;
  category?: Maybe<Category>;
  topMonthlyWalletCategories?: Maybe<Array<TopCategory>>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  wallet?: Maybe<Wallet>;
  walletMonthlyOverview: WalletMonthlyOverview;
  wallets: Array<Wallet>;
  walletsStatistics: Array<WalletStatistics>;
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


export type QueryTopMonthlyWalletCategoriesArgs = {
  date: Scalars['String'];
  take?: Maybe<Scalars['Int']>;
  walletId: Scalars['String'];
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionsArgs = {
  cursor?: Maybe<TransactionWhereUniqueInput>;
  orderBy?: Maybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryWalletArgs = {
  where: WalletWhereUniqueInput;
};


export type QueryWalletMonthlyOverviewArgs = {
  date: Scalars['String'];
  id: Scalars['String'];
};


export type QueryWalletsArgs = {
  cursor?: Maybe<WalletWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryWalletsStatisticsArgs = {
  where?: Maybe<WalletWhereInput>;
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

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
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

export type TopCategory = {
  amount: Scalars['Float'];
  category: Category;
  transactionsCount: Scalars['Int'];
};

export type Transaction = {
  amount: Scalars['Float'];
  category: Category;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title: Scalars['String'];
  type: Type;
  wallet: Wallet;
};

export type TransactionCreateInput = {
  amount?: Maybe<Scalars['Float']>;
  category: CategoryCreateNestedOneWithoutTransactionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wallet: WalletCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateManyCategoryInput = {
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  walletId: Scalars['String'];
};

export type TransactionCreateManyCategoryInputEnvelope = {
  data?: Maybe<Array<TransactionCreateManyCategoryInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransactionCreateManyWalletInput = {
  amount?: Maybe<Scalars['Float']>;
  categoryId: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TransactionCreateManyWalletInputEnvelope = {
  data?: Maybe<Array<TransactionCreateManyWalletInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TransactionCreateNestedManyWithoutCategoryInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCategoryInput>>;
  create?: Maybe<Array<TransactionCreateWithoutCategoryInput>>;
  createMany?: Maybe<TransactionCreateManyCategoryInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutWalletInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutWalletInput>>;
  create?: Maybe<Array<TransactionCreateWithoutWalletInput>>;
  createMany?: Maybe<TransactionCreateManyWalletInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutCategoryInput = {
  create: TransactionCreateWithoutCategoryInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutWalletInput = {
  create: TransactionCreateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutCategoryInput = {
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wallet: WalletCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutWalletInput = {
  amount?: Maybe<Scalars['Float']>;
  category: CategoryCreateNestedOneWithoutTransactionsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
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

export type TransactionOrderByWithRelationInput = {
  amount?: Maybe<SortOrder>;
  category?: Maybe<CategoryOrderByWithRelationInput>;
  categoryId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  date?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  wallet?: Maybe<WalletOrderByWithRelationInput>;
  walletId?: Maybe<SortOrder>;
};

export type TransactionScalarWhereInput = {
  AND?: Maybe<Array<TransactionScalarWhereInput>>;
  NOT?: Maybe<Array<TransactionScalarWhereInput>>;
  OR?: Maybe<Array<TransactionScalarWhereInput>>;
  amount?: Maybe<FloatFilter>;
  categoryId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<EnumTypeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  walletId?: Maybe<StringFilter>;
};

export type TransactionUpdateInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutTransactionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  wallet?: Maybe<WalletUpdateOneRequiredWithoutTransactionsInput>;
};

export type TransactionUpdateManyMutationInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutWalletInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TransactionCreateOrConnectWithoutCategoryInput>>;
  create?: Maybe<Array<TransactionCreateWithoutCategoryInput>>;
  createMany?: Maybe<TransactionCreateManyCategoryInputEnvelope>;
  delete?: Maybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TransactionScalarWhereInput>>;
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>;
  set?: Maybe<Array<TransactionWhereUniqueInput>>;
  update?: Maybe<Array<TransactionUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: Maybe<Array<TransactionUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: Maybe<Array<TransactionUpsertWithWhereUniqueWithoutCategoryInput>>;
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

export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
  data: TransactionUpdateWithoutCategoryInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
  data: TransactionUpdateWithoutWalletInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutCategoryInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  wallet?: Maybe<WalletUpdateOneRequiredWithoutTransactionsInput>;
};

export type TransactionUpdateWithoutWalletInput = {
  amount?: Maybe<FloatFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneRequiredWithoutTransactionsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  date?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTypeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
  create: TransactionCreateWithoutCategoryInput;
  update: TransactionUpdateWithoutCategoryInput;
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
  category?: Maybe<CategoryWhereInput>;
  categoryId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  date?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
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
  transactions?: Maybe<TransactionCreateNestedManyWithoutWalletInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WalletCreateNestedOneWithoutTransactionsInput = {
  connect?: Maybe<WalletWhereUniqueInput>;
  connectOrCreate?: Maybe<WalletCreateOrConnectWithoutTransactionsInput>;
  create?: Maybe<WalletCreateWithoutTransactionsInput>;
};

export type WalletCreateOrConnectWithoutTransactionsInput = {
  create: WalletCreateWithoutTransactionsInput;
  where: WalletWhereUniqueInput;
};

export type WalletCreateWithoutTransactionsInput = {
  color?: Maybe<Color>;
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  initialBalance?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WalletMonthlyOverview = {
  balance: Scalars['Float'];
  expenses: Scalars['Float'];
  incomes: Scalars['Float'];
};

export type WalletOrderByWithRelationInput = {
  color?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  icon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  initialBalance?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  transactions?: Maybe<TransactionOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
};

export type WalletStatistics = {
  totalAmount: Scalars['Float'];
  wallet: Wallet;
};

export type WalletUpdateInput = {
  color?: Maybe<EnumColorFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  initialBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  transactions?: Maybe<TransactionUpdateManyWithoutWalletInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WalletUpdateOneRequiredWithoutTransactionsInput = {
  connect?: Maybe<WalletWhereUniqueInput>;
  connectOrCreate?: Maybe<WalletCreateOrConnectWithoutTransactionsInput>;
  create?: Maybe<WalletCreateWithoutTransactionsInput>;
  update?: Maybe<WalletUpdateWithoutTransactionsInput>;
  upsert?: Maybe<WalletUpsertWithoutTransactionsInput>;
};

export type WalletUpdateWithoutTransactionsInput = {
  color?: Maybe<EnumColorFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  initialBalance?: Maybe<FloatFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type WalletUpsertWithoutTransactionsInput = {
  create: WalletCreateWithoutTransactionsInput;
  update: WalletUpdateWithoutTransactionsInput;
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
  transactions?: Maybe<TransactionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type WalletWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CategorySnippetFragment = Pick<Category, 'id' | 'name' | 'icon' | 'type' | 'strategies'>;

export type TopCategorySnippetFragment = (
  Pick<TopCategory, 'amount' | 'transactionsCount'>
  & { category: CategorySnippetFragment }
);

export type TransactionSnippetFragment = (
  Pick<Transaction, 'id' | 'title' | 'date' | 'amount' | 'description'>
  & { category: Pick<Category, 'id' | 'name' | 'icon'>, wallet: Pick<Wallet, 'id' | 'name'> }
);

export type WalletSnippetFragment = Pick<Wallet, 'id' | 'name' | 'icon' | 'color' | 'initialBalance'>;

export type WalletMonthlyOverviewSnippetFragment = Pick<WalletMonthlyOverview, 'incomes' | 'expenses' | 'balance'>;

export type WalletStatisticsSnippetFragment = (
  Pick<WalletStatistics, 'totalAmount'>
  & { wallet: WalletSnippetFragment }
);

export type CreateCategoryMutationVariables = Exact<{
  data: CategoryCreateInput;
}>;


export type CreateCategoryMutation = { createOneCategory: CategorySnippetFragment };

export type CreateTransactionMutationVariables = Exact<{
  data: TransactionCreateInput;
}>;


export type CreateTransactionMutation = { createOneTransaction: TransactionSnippetFragment };

export type CreateWalletMutationVariables = Exact<{
  data: WalletCreateInput;
}>;


export type CreateWalletMutation = { createOneWallet: WalletSnippetFragment };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCategoryMutation = { deleteOneCategory?: Maybe<Pick<Category, 'id'>> };

export type DeleteTransactionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTransactionMutation = { deleteOneTransaction?: Maybe<Pick<Transaction, 'id'>> };

export type DeleteWalletMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteWalletMutation = { deleteOneWallet?: Maybe<Pick<Wallet, 'id'>> };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String'];
  data: CategoryUpdateInput;
}>;


export type UpdateCategoryMutation = { updateOneCategory?: Maybe<CategorySnippetFragment> };

export type UpdateTransactionMutationVariables = Exact<{
  id: Scalars['String'];
  data: TransactionUpdateInput;
}>;


export type UpdateTransactionMutation = { updateOneTransaction?: Maybe<TransactionSnippetFragment> };

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
  id: Scalars['String'];
}>;


export type CategoryQuery = { category?: Maybe<CategorySnippetFragment> };

export type TopMonthlyWalletCategoriesQueryVariables = Exact<{
  walletId: Scalars['String'];
  date: Scalars['String'];
  take?: Maybe<Scalars['Int']>;
}>;


export type TopMonthlyWalletCategoriesQuery = { topMonthlyWalletCategories?: Maybe<Array<TopCategorySnippetFragment>> };

export type TransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TransactionQuery = { transaction?: Maybe<TransactionSnippetFragment> };

export type TransactionsQueryVariables = Exact<{
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<Array<TransactionOrderByWithRelationInput> | TransactionOrderByWithRelationInput>;
}>;


export type TransactionsQuery = { transactions: Array<TransactionSnippetFragment> };

export type WalletQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type WalletQuery = { wallet?: Maybe<WalletSnippetFragment> };

export type WalletMonthlyOverviewQueryVariables = Exact<{
  id: Scalars['String'];
  date: Scalars['String'];
}>;


export type WalletMonthlyOverviewQuery = { walletMonthlyOverview: WalletMonthlyOverviewSnippetFragment };

export type WalletsStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletsStatisticsQuery = { walletsStatistics: Array<WalletStatisticsSnippetFragment> };

export const CategorySnippetFragmentDoc = gql`
    fragment CategorySnippet on Category {
  id
  name
  icon
  type
  strategies
}
    `;
export const TopCategorySnippetFragmentDoc = gql`
    fragment TopCategorySnippet on TopCategory {
  category {
    ...CategorySnippet
  }
  amount
  transactionsCount
}
    ${CategorySnippetFragmentDoc}`;
export const TransactionSnippetFragmentDoc = gql`
    fragment TransactionSnippet on Transaction {
  id
  title
  date
  amount
  description
  category {
    id
    name
    icon
  }
  wallet {
    id
    name
  }
}
    `;
export const WalletMonthlyOverviewSnippetFragmentDoc = gql`
    fragment WalletMonthlyOverviewSnippet on WalletMonthlyOverview {
  incomes
  expenses
  balance
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
export const WalletStatisticsSnippetFragmentDoc = gql`
    fragment WalletStatisticsSnippet on WalletStatistics {
  wallet {
    ...WalletSnippet
  }
  totalAmount
}
    ${WalletSnippetFragmentDoc}`;
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
export const DeleteTransactionDocument = gql`
    mutation DeleteTransaction($id: String!) {
  deleteOneTransaction(where: {id: $id}) {
    id
  }
}
    `;

export function useDeleteTransactionMutation() {
  return Urql.useMutation<DeleteTransactionMutation, DeleteTransactionMutationVariables>(DeleteTransactionDocument);
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
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($id: String!, $data: TransactionUpdateInput!) {
  updateOneTransaction(data: $data, where: {id: $id}) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useUpdateTransactionMutation() {
  return Urql.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument);
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
    query Category($id: String!) {
  category(where: {id: $id}) {
    ...CategorySnippet
  }
}
    ${CategorySnippetFragmentDoc}`;

export function useCategoryQuery(options: Omit<Urql.UseQueryArgs<CategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CategoryQuery>({ query: CategoryDocument, ...options });
};
export const TopMonthlyWalletCategoriesDocument = gql`
    query TopMonthlyWalletCategories($walletId: String!, $date: String!, $take: Int) {
  topMonthlyWalletCategories(walletId: $walletId, date: $date, take: $take) {
    ...TopCategorySnippet
  }
}
    ${TopCategorySnippetFragmentDoc}`;

export function useTopMonthlyWalletCategoriesQuery(options: Omit<Urql.UseQueryArgs<TopMonthlyWalletCategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TopMonthlyWalletCategoriesQuery>({ query: TopMonthlyWalletCategoriesDocument, ...options });
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
    query Transactions($where: TransactionWhereInput, $orderBy: [TransactionOrderByWithRelationInput!]) {
  transactions(where: $where, orderBy: $orderBy) {
    ...TransactionSnippet
  }
}
    ${TransactionSnippetFragmentDoc}`;

export function useTransactionsQuery(options: Omit<Urql.UseQueryArgs<TransactionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TransactionsQuery>({ query: TransactionsDocument, ...options });
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
export const WalletMonthlyOverviewDocument = gql`
    query WalletMonthlyOverview($id: String!, $date: String!) {
  walletMonthlyOverview(id: $id, date: $date) {
    ...WalletMonthlyOverviewSnippet
  }
}
    ${WalletMonthlyOverviewSnippetFragmentDoc}`;

export function useWalletMonthlyOverviewQuery(options: Omit<Urql.UseQueryArgs<WalletMonthlyOverviewQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WalletMonthlyOverviewQuery>({ query: WalletMonthlyOverviewDocument, ...options });
};
export const WalletsStatisticsDocument = gql`
    query WalletsStatistics {
  walletsStatistics {
    ...WalletStatisticsSnippet
  }
}
    ${WalletStatisticsSnippetFragmentDoc}`;

export function useWalletsStatisticsQuery(options: Omit<Urql.UseQueryArgs<WalletsStatisticsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<WalletsStatisticsQuery>({ query: WalletsStatisticsDocument, ...options });
};