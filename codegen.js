module.exports = {
  overwrite: true,
  schema: "src/generated/schema.graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql-urql.tsx": {
      config: {
        withHooks: true,
        scalars: {
          DateTime: "string",
        },
        skipTypename: true,
      },
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      hooks: {
        afterAllFileWrite: ["eslint --fix"],
      },
    },
  },
};
