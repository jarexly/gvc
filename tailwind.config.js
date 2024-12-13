/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        royal: {
          50: '#e6e9f4',
          100: '#ccd3e9',
          200: '#99a7d3',
          300: '#667abd',
          400: '#334ea7',
          500: '#002291',
          600: '#001b74',
          700: '#001557',
          800: '#000e3a',
          900: '#00071d',
        }
      },
    },
  },
  plugins: [],
};