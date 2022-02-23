module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gunmetal: { DEFAULT: "#2B3945", DARK: "#202C37" },
        "eerie-black": "#111517",
        "battleship-gray": "#858585",
        FAFA: "#FAFAFA",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fit, 275px)",
      },
    },
  },
  plugins: [],
};
