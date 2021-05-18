const codegenConfig = require("./codegen");

module.exports = {
  projects: {
    dev: {
      schema: "http://localhost:3000/api/graphql",
      documents: "src/**/*.graphql",
      codegen: {
        ...codegenConfig,
        schema: undefined,
      },
    },
  },
};
