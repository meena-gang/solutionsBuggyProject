/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#09438D",
        orange: "#FF651B",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'budget': "url('./src/assets/Budget.png')", 
        'location':"url('./src/assets/Frame 69.png')",
        'reason':"url('./src/assets/Why.png')",
        'idea': "url('./src/assets/idea.png')"

      },
    },
  },
  plugins: [],
};
