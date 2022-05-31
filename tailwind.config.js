const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "490px",
      md: "800px",
      lg: "1100px",
      xl: "1300px",
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
    plugins: [],
  },
};
