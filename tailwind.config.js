// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust if using different folder structure
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            black: "#000000",
            blue: "#3B82F6",
            purple: "#8B5CF6",
            darkGray: "#18181b",
          },
        },
      },
    },
    plugins: [],
  };
  