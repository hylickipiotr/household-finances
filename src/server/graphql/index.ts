import { fieldAuthorizePlugin, makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import path from "path";
import * as schemaTypes from "./schema";

const outputPath = path.join(process.cwd(), "src/server/graphql");

export const schema = makeSchema({
  types: schemaTypes,
  outputs: {
    typegen: path.join(outputPath, "nexus-typegen.ts"),
    schema: path.join(outputPath, "schema.graphql"),
  },
  plugins: [
    fieldAuthorizePlugin(),
    nexusPrisma({
      experimentalCRUD: true,
      paginationStrategy: "relay",
    }),
  ],
  features: {
    abstractTypeStrategies: {
      resolveType: false,
    },
  },
  contextType: {
    module: path.join(outputPath, "context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
