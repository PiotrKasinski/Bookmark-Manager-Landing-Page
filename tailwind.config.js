module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "new-purple": "#5267DF",
        "new-red": "#FA5959",
        "new-blue": "#242A45",
        "new-grey": "#9194A2",
        "new-white": "#f7f7f7",
      },
    },
    fotnFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
