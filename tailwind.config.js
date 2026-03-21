/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F5", // Light neutral base
        secondary: "#FFFFFF", // White bento boxes
        tertiary: "#D4D4D8", // Neutral borders
        accentBrand: "#4F46E5", // Vibrant Indigo
        accentCyan: "#0EA5E9", // Sky Blue
        accentPurple: "#7C3AED", // Violet
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
