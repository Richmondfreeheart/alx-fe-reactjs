/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this includes all paths where Tailwind is used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
