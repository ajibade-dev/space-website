/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      barlow: ['Barlow', 'sans-serif'],
      bellefair: ['Bellefair', 'sans-serif'],
      barlow_condensed: ['Barlow_Condensed', 'sans-serif'],
     }
    },
  },
  plugins: [],
};
