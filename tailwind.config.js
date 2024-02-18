module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-pink": "#ffeaf4",
        "dark-pink": "#ff66c4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
