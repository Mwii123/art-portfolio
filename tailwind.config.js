/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'sans-serif'],
      },
      colors: {
        bg:      '#0e0d0b',
        surface: '#161410',
        accent:  '#c9a96e',
        accent2: '#e8d5b0',
        muted:   '#8a8378',
        ink:     '#e8e2d9',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
