/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71',
        secondary: '#9127f3',
        dark: '#1a1a1a',
        light: '#ffffff',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 10px rgba(46, 204, 113, 0.5)' },
          '100%': { 'text-shadow': '0 0 20px rgba(145, 39, 243, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};