export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9B1C1C",
        dark: "#0F0F0F",
        darkgray: "#1F1F1F",
      },
      fontFamily: {
        sans: [
          "Noto Sans Thai",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
