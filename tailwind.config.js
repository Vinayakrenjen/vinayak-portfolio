/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        // Light Theme Core 
        lvlPrimary: "#FAFAFA",
        lvlSecondary: "rgba(255, 255, 255, 0.7)",
        lvlTertiary: "#E2E8F0",
        
        // Brand Colors
        lvlBrand: "#3B82F6", // Blue
        lvlCyan: "#06B6D4",
        lvlPurple: "#8B5CF6",

        // Dark Theme Core (Strictly avoiding #000000)
        darkLvlPrimary: "#0F172A", // Deep Slate 900
        darkLvlSecondary: "rgba(30, 41, 59, 0.7)", // Glass Slate 800
        darkLvlTertiary: "#334155", // Slate 700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
