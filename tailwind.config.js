/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        500: "500ms",
      },
      fontFamily: {
        main: "'Main'",
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
      colors: {
        mdpurple: "rgba(202,44,216,1)",
        mdblue: "rgba(29,84,223,1)",
      },
    },
  },
  plugins: [],
};
