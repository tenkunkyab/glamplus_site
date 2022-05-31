module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "490px",
      md: "800px",
      lg: "1100px",
      xl: "1300px",
    },
    colors: {
      primary: "#0BACF0",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
