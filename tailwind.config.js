const colors = require("./tokens/colors.json").colors;
const typography = require("./tokens/typography.json").typography;
const elevation = require("./tokens/elevation.json").elevation;
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      boxShadow: {
        ...elevation,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {};

      // Convert JSON to Tailwind CSS utilities
      Object.entries(typography).forEach(([section, styles]) => {
        Object.entries(styles).forEach(([styleName, styleProperties]) => {
          const className = `.text-${section}-${styleName}`;
          newUtilities[className] = {
            fontSize: styleProperties.fontSize,
            lineHeight: styleProperties.lineHeight,
            fontWeight: styleProperties.fontWeight,
          };
        });
      });

      // Add the new utilities to Tailwind CSS
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
