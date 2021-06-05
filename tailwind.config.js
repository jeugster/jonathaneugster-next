/* eslint-disable no-undef */
module.exports = {
 mode: 'jit',
 purge: {
  content: [
   './pages/**/*.{js,ts,jsx,tsx}',
   './components/**/*.{js,ts,jsx,tsx}',
  ],
  options: {
   keyframes: true,
  },
 },
 darkMode: false, // or 'media' or 'class'
 theme: {},
 variants: {},
 plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/line-clamp'),
 ],
}
