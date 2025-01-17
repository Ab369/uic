/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        funnel: ['Funnel Display', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        'star-movement-bottom': {
            '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
            '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
          },
          'star-movement-top': {
            '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
            '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
          },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
          'star-movement-top': 'star-movement-top linear infinite alternate',
      },
    },
  },
  plugins: [addVariablesForColors],
  
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}