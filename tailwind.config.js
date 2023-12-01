/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:"poppins",
        Inter:"inter",
        JetBrainsMono:"JetBrains Mono"
      },
      backgroundImage:{
        'home':"url('/pwaEnergs/src/assets/images/abt.jpg')",
      },
    },
  },
  gridTemplateRows: {
    // Complex site-specific row configuration
    'layout': '660px, 1fr',
  },
  plugins: [
    // require("flowbite/plugin"),
  ],
}

