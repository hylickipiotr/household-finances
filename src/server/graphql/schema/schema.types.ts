import { ObjectDefinitionBlock } from "nexus/dist/blocks";

export type CreateMutationsFn = (t: ObjectDefinitionBlock<"Mutation">) => void;
export type CreateQueriesFn = (t: ObjectDefinitionBlock<"Query">) => void;
