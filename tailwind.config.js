const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'

  backgroundImage: {
    "profile-pattern":
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
    "footer-texture": "url('/img/footer-texture.png')"
  },
  theme: {
    extend: {
      colors: {
        trueGray: colors.gray,
        trueAmber: colors.amber,
        trueOrange: colors.orange,
        trueSky: colors.sky,
        trueRed: colors.red
      }
    },
    fontFamily: {
      sans: ["Inter Tight", "Mukta", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
