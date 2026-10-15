/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '786px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
