/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Pastikan direktori file Anda di-scan
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Menambahkan font Inter
      },
    },
  },
  plugins: [],
};
