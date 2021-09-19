const codegenConfig = require("./codegen");

module.exports = {
  projects: {
    dev: {
      schema: "src/generated/schema.graphql",
      documents: "src/**/*.graphql",
      codegen: {
        ...codegenConfig,
        schema: undefined,
      },
    },
  },
};
