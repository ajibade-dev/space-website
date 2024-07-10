/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "very-dark-navy":"#0b0d17",
        "light-blue":"#d0d6f9"
      },
     fontFamily:{
      barlow: ['Barlow', 'sans-serif'],
      bellefair: ['Bellefair', 'sans-serif'],
      barlow_cond: ['Barlow_Condensed', 'sans-serif'],
     }
    },
  },
  plugins: [],
};
