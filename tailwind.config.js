const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      ...defaultTheme.colors,
      green: colors.teal,
      gray: colors.blueGray,
      purple: colors.violet,
      red: colors.rose,
    },
    extend: {
      fontFamily: {
        // sans: ["Roboto"],
        finance: ["Unica One, ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "3xl":
          "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
      },
      minWidth: (theme) => theme("spacing"),
      boxShadow: {
        "3xl":
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};
