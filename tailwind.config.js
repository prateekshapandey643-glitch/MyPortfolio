/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  extend: {
  animation: {
    fadeUp: "fadeUp 0.8s ease-out forwards",
    float: "float 4s ease-in-out infinite",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-12px)" },
    },
    fadeUp: {
      "0%": { opacity: "0", transform: "translateY(30px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
  },
  },
},
  plugins: [],
}
