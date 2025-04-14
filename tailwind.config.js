/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['Poppins", sans-serif'],
      dmSerif: ["dm-serif"],
    },
    screens: {
      sm: "200px",
      // => @media (min-width: 200px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      minLg: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors: {
      fadedBlue: "#e8f0fe",
      textGrey: "#80868b",
      textBlue: "#1a73e8",
      heroBrown: "#f3efec",
      lightGrayDay: "#d9dee2",
      festival: {
        orange: "#F97316",
        brown: "#8B4513",
        ochre: "#CC7722",
        terracotta: "#E2725B",
        green: "#2E8B57",
        gold: "#FFD700",
        maroon: "#800000",
        navy: "#1A1F2C",
      },
    },
  },
  plugins: [],
};
