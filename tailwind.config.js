/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily : {
        'sans': ['Plus Jakarta Sans', 'Tenor Sans', 'sans-serif'],
        'Tenorsans' : ['Tenor Sans', 'sans-serif'],
        'Vollkorn' : ['Vollkorn', 'serif'],
        'Swanky': ['Swanky and Moo Moo', 'cursive']
      }
    },
  },
  plugins: [],
};
