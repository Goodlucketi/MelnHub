/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': {'max': '1000px'},
      // => @media (max-width: 1000px) { ... }

      'sm': {'max': '500px'},
      // => @media (max-width: 480px) { ... }
    }
  },
  plugins: [],
  
}