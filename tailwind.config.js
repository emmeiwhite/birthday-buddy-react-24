/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      "black-1": {
        DEFAULT: "#0F172A",
      },
      "dark-gray": {
        DEFAULT: "#64748B",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [],
};
