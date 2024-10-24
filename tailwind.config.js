/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['Poppins", sans-serif'],
    },
    extend: {},
    colors: {
      fadedBlue: "#e8f0fe",
      textGrey: "#80868b",
      textBlue: "#1a73e8",
      heroBrown: "#f3efec",
    },
  },
  plugins: [],
};
