/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jfifi-pink": "#ff00ff",
        "jfifi-cyan": "#00ffff",
        "jfifi-yellow": "#ffff00",
      },
    },
  },
  plugins: [],
}

