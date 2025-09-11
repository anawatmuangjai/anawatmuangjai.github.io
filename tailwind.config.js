/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cozy color palette
        cozy: {
          // Warm browns
          brown: {
            50: '#fdf8f6',
            100: '#f2e8e2',
            200: '#eaddd5',
            300: '#d1bab0',
            400: '#b39488',
            500: '#9d7968',
            600: '#8b6f61',
            700: '#735c52',
            800: '#5f4e47',
            900: '#4f423c',
          },
          // Creams
          cream: {
            50: '#fefdf9',
            100: '#fbf7ec',
            200: '#f7f0d9',
            300: '#f0e4bd',
            400: '#e7d29d',
            500: '#dabf82',
            600: '#c5a66b',
            700: '#a5895a',
            800: '#866f4d',
            900: '#6d5b42',
          },
          // Soft orange accent
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}