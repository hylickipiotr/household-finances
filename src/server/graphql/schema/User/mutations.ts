import argon2 from "argon2";
import { arg, mutationField, nonNull } from "nexus";
import * as yup from "yup";
import { LoginInput, RegisterInput } from "./inputs";

export const userValidateSchema = yup.object().shape({
  username: yup.string().required().min(3).max(32),
  displayName: yup.string().required().min(3).max(32),
  password: yup
    .string()
    .required()
    .matches(
      /(?=.*?[A-Z]).{0,}$/,
      "Password must contains at least one upper case English letter."
    )
    .matches(
      /(?=.*?[a-z]).{0,}$/,
      "Password must contains at least one lower case English letter."
    )
    .matches(/(?=.*?[0-9]).{0,}$/, "Password must contains at least one digit.")
    .matches(
      /(?=.*?[#?!@$%^&*-]).{0,}$/,
      "Password must contains at least one special character (e.g. #?!@$%^&*-)"
    )
    .min(8),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match."),
});

export const register = mutationField("register", {
  type: "User",
  args: {
    data: nonNull(
      arg({
        type: RegisterInput,
      })
    ),
  },
  async resolve(_, { data }, { prisma }) {
    await userValidateSchema.validate(data);

    const { username, displayName, password } = data;

    const hashedPassword = await argon2.hash(password);

    try {
      const newUser = await prisma.user.create({
        data: {
          username,
          displayName,
          password: hashedPassword,
        },
        select: {
          id: true,
          username: true,
          displayName: true,
        },
      });

      return newUser;
    } catch (err) {
      if (err.code === "P2002") {
        throw new Error("There is a user with the same username.");
      }

      throw err;
    }
  },
});

export const login = mutationField("login", {
  type: "Boolean",
  args: {
    data: nonNull(
      arg({
        type: LoginInput,
      })
    ),
  },
  async resolve(_, { data }, { prisma }) {
    const { username, password } = data;

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) {
      const isPasswordValid = await argon2.verify(user.password, password);

      if (isPasswordValid) {
        return true;
      }
    }

    throw new Error("Invalid username or password.");
  },
});
