/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatup: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(-1000px) rotate(720deg)" },
        },
      },
      animation: {
        floating: "floatup 25s linear infinite",
      },
    },
  },
  plugins: [],
};
