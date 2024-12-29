/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins']
      },
      colors:{
        customFont: {
          primary: '#1E293B', 
          secondary: '#5C6169', 
          blue: '#306BFF', 
          gray:'#464255'
        },
      }
    },
    
  },
  plugins: [],
}