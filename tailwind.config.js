/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#ffffff"
      },
      colors: {
        "primary": "#7cbac4"
      },
      boxShadow: {
        "sombraCaixuda": "2px 0px 13px rgba(0,0,0, .2)"
      }
    }
  },
  plugins: [],
}
