import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import * as path from "path";
import * as schemaTypes from "./schemaTypes";

const schema = makeSchema({
  types: schemaTypes,
  outputs: {
    schema: path.join(process.cwd(), "src/generated/schema.graphql"),
    typegen: path.join(process.cwd(), "src/generated/nexus-typegen.ts"),
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      paginationStrategy: "prisma",
    }),
  ],
  contextType: {
    module: path.join(process.cwd(), "src/lib/nexus/context.ts"),
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

export { schema };
