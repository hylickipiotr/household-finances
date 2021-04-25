import { inputObjectType } from "nexus";

export const RegisterInput = inputObjectType({
  name: "RegisterInput",
  definition(t) {
    t.nonNull.string("username");
    t.nonNull.string("displayName");
    t.nonNull.string("password");
    t.nonNull.string("repeatPassword");
  },
});

export const LoginInput = inputObjectType({
  name: "LoginInput",
  definition(t) {
    t.nonNull.string("username");
    t.nonNull.string("password");
  },
});
