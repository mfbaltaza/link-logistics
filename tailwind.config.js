/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ttHoves: ['TTHoves', 'sans-serif']
      },
      colors: {
        emerald: 'rgb(150, 183, 192)',
        rust: '#B2613A',
        gold: '#DEC7AC',
        darkGold: '#BDA180',
        slate: '#252429',
        cement: '#EFEFEF'
      }
    },
  },
  plugins: [],
}
