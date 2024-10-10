/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'error-b': "url('https://images.ctfassets.net/eoaaqxyywn6o/6zv8p9M7vza54W7JILsUoC/5a0142491d3703a0c04720b146fa72f2/500-3.jpg?w=1600&q=80')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}