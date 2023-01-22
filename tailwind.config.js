/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
      'cardHD': "url('/public/images/jadoo.webp')",
      'cardBG': "url('/public/images/site_axe_haut.webp')",
      'cardFC': "url('/public/images/site_axe_center.webp')",
      'cardBD': "url('/public/images/pokedex.webp')",
      'cardJ1': "url('/public/images/jadoo_1.png')",
      'cardJ2': "url('/public/images/jadoo_2.png')",
      },
      cursor: {
        'cursor': 'url(hand.cur), auto',
      }
    },
    fontFamily: {
      voyage: ['voyage','sans-serif'],
      staff: ['staff','sans-serif'],
    },
  },
  plugins: [],
}
