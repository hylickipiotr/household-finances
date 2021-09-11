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
};

export type FloatFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  decrement?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  createOneWallet: Wallet;
  updateOneWallet?: Maybe<Wallet>;
  deleteOneWallet?: Maybe<Wallet>;
};


export type MutationCreateOneWalletArgs = {
  data: WalletCreateInput;
};


export type MutationUpdateOneWalletArgs = {
  data: WalletUpdateInput;
  where: WalletWhereUniqueInput;
};


export type MutationDeleteOneWalletArgs = {
  where: WalletWhereUniqueInput;
};

export type Query = {
  wallets: Array<Wallet>;
  wallet?: Maybe<Wallet>;
};


export type QueryWalletsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<WalletWhereUniqueInput>;
  after?: Maybe<WalletWhereUniqueInput>;
};


export type QueryWalletArgs = {
  where: WalletWhereUniqueInput;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Wallet = {
  id: Scalars['String'];
  name: Scalars['String'];
  icon: Scalars['String'];
  color: Scalars['String'];
  initialBalance: Scalars['Float'];
};

export type WalletCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  color: Scalars['String'];
  initialBalance: Scalars['Float'];
};

export type WalletUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  icon?: Maybe<StringFieldUpdateOperationsInput>;
  color?: Maybe<StringFieldUpdateOperationsInput>;
  initialBalance?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type WalletWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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