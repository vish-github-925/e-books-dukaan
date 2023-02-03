/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        appcolor: "#2874f0"
      }
    },
  },
  plugins: [],
};
