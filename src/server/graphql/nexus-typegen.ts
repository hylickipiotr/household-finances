/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  FloatFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Float
    divide?: number | null; // Float
    increment?: number | null; // Float
    multiply?: number | null; // Float
    set?: number | null; // Float
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  WalletCreateInput: { // input type
    color: string; // String!
    icon: string; // String!
    id?: string | null; // String
    initialBalance: number; // Float!
    name: string; // String!
  }
  WalletUpdateInput: { // input type
    color?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    icon?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    initialBalance?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  WalletWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Wallet: { // root type
    color: string; // String!
    icon: string; // String!
    id: string; // String!
    initialBalance: number; // Float!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOneWallet: NexusGenRootTypes['Wallet']; // Wallet!
    deleteOneWallet: NexusGenRootTypes['Wallet'] | null; // Wallet
    updateOneWallet: NexusGenRootTypes['Wallet'] | null; // Wallet
  }
  Query: { // field return type
    wallet: NexusGenRootTypes['Wallet'] | null; // Wallet
    wallets: NexusGenRootTypes['Wallet'][]; // [Wallet!]!
  }
  Wallet: { // field return type
    color: string; // String!
    icon: string; // String!
    id: string; // String!
    initialBalance: number; // Float!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createOneWallet: 'Wallet'
    deleteOneWallet: 'Wallet'
    updateOneWallet: 'Wallet'
  }
  Query: { // field return type name
    wallet: 'Wallet'
    wallets: 'Wallet'
  }
  Wallet: { // field return type name
    color: 'String'
    icon: 'String'
    id: 'String'
    initialBalance: 'Float'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneWallet: { // args
      data: NexusGenInputs['WalletCreateInput']; // WalletCreateInput!
    }
    deleteOneWallet: { // args
      where: NexusGenInputs['WalletWhereUniqueInput']; // WalletWhereUniqueInput!
    }
    updateOneWallet: { // args
      data: NexusGenInputs['WalletUpdateInput']; // WalletUpdateInput!
      where: NexusGenInputs['WalletWhereUniqueInput']; // WalletWhereUniqueInput!
    }
  }
  Query: {
    wallet: { // args
      where: NexusGenInputs['WalletWhereUniqueInput']; // WalletWhereUniqueInput!
    }
    wallets: { // args
      after?: NexusGenInputs['WalletWhereUniqueInput'] | null; // WalletWhereUniqueInput
      before?: NexusGenInputs['WalletWhereUniqueInput'] | null; // WalletWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}