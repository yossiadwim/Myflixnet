/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true, 
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1440px",
        sm: "640px",
      },
      fontFamily: {
        sans: ['Inter var'],
      },
    },
  },  
  plugins: [],
};
