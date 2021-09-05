module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Roboto"],
        finance: ["Unica One, ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "3xl":
          "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({ strategy: "class" }),
  ],
};
