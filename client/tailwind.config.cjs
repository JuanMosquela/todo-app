/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10rem",
      },
      colors: {
        blue: "#4286F5",
        dark: "#1E1F27",
        white: "#FFF",
        red: "#ff0033",
        gray: "#F5F5F5",
        text: "#808080",
        hover_blue: "#98CAFB",
        green: "#26B887",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        // tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
      },
    },
  },
  plugins: [],
};
