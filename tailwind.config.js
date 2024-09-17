import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".scrollbar-custom": {
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #0C1844",
        },
        ".scrollbar-custom::-webkit-scrollbar": {
          width: "5px",
        },
        ".scrollbar-custom::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "10px",
        },
        ".scrollbar-custom::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
        ".scrollbar-custom::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
      });
    }),
  ],
};
