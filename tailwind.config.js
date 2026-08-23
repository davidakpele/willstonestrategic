/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '1000px',
      md: '1000px',
      lg: '1000px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
