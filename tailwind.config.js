/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf7e9',
          100: '#f7efd3',
          200: '#efdfa7',
          300: '#e7cf7b',
          400: '#dfbf4f',
          500: '#d4af37', // Couleur principale
          600: '#b39429',
          700: '#8d741f',
          800: '#675415',
          900: '#40340b',
        },
        // Les couleurs gray sont déjà définies par défaut dans Tailwind
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
}
