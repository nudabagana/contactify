/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',
        'primary-light': '#2196F3',
        'primary-dark': '#0D47A1',
        accent: '#1DE9B6',
        'accent-dark': '#22c199',
        blur: '#888888',
      },
      borderWidth: { 1: '1px' },
      maxWidth: {
        200: '200px',
      },
      minWidth: { 100: '100px', 150: "150px" },
      fontFamily: { openSans: 'Open Sans' },
    },
  },
  plugins: [],
};
