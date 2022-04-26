const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Charter", ...defaultTheme.fontFamily.serif],
      },
      listStyleType: {
        circle: "circle",
      },
    },
  },
  plugins: [],
};
