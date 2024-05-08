/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce': 'bounce 1s ease-in-out 10',
      },
    },
  },
  plugins: [],
}

