/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          blue: "#3B82F6",
          purple: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
}
