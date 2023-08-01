/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      "primary" : "#010C15",
      "secondary" : "#011627",
      "ternary" : "#1E2D3D",
      "aiBorder" : "#1E2D3D",
      "normalText": "#607B96",
    },
    fontFamily: {
      "firaCode" : ["Fira Code", "monospace"],
    }
  },
  },
  plugins: [],
}