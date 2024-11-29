/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        // Add more fine-grained spacing if needed
      }
    },
  },
  plugins: [],
}