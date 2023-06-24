/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "sm": "0.25rem",
      }
    },
  },
  plugins: [],
}
