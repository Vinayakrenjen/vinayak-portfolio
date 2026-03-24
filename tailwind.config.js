/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode toggling
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F5", // Light neutral base
        secondary: "#FFFFFF", // White bento boxes
        tertiary: "#D4D4D8", // Neutral borders
        accentBrand: "#4F46E5", // Vibrant Indigo
        accentCyan: "#0EA5E9", // Sky Blue
        accentPurple: "#7C3AED", // Violet
        darkPrimary: "#0A0A0A", // Very deep grey for dark mode
        darkSecondary: "#121212", // Dark bento boxes
        darkTertiary: "#1E1E1E", // Dark borders
        darkAccent: "#EAB308", // Golden yellow for dark
        darkCyan: "#06b6d4",
        darkPurple: "#8b5cf6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
