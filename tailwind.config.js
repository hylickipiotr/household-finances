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
      minWidth: (theme) => theme("spacing"),
      boxShadow: {
        "3xl":
          "0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%)",
        spotify: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        "box-shadows":
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
        "airbnb-1": "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
        "airbnb-2": "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        "airbnb-3": "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        "airbnb-4": "rgba(0, 0, 0, 0.18) 0px 2px 4px",
        trello:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};
