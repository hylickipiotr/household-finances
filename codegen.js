module.exports = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: "src/client/**/*.graphql",
  generates: {
    "src/client/graphql/types.generated.tsx": {
      config: {
        withHooks: true,
        withComponent: false,
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
