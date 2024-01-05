/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "'Main'",
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
