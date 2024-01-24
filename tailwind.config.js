const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-proxima)", ...fontFamily.sans],
      },
      colors: {
        primary: "#F1C94A",
        secondary: "#727279",
        secondary1: "#5C5C63",
        slateGray: "#BFBFBF",
        success: "#61F14A",
        info: "#4A97F1",
        danger: "#F14A4A",
        orange: "#F1904A",
        borderColor: "#555555",
        bgColor: "#18191e",
        grayColor: "#2B2B35",
        darkColor: "#202327",
        lightGray: "#CCCCCC",
      },
      lineHeight: {
        0: 0,
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
