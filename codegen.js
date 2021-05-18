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
      },
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      hooks: {
        afterAllFileWrite: ["eslint --fix"],
      },
    },
  },
};
