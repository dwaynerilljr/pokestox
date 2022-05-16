module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "josefin": ['"Josefin Sans", "sans"']
      },
      colors: {
        brand: "#6366F1",
        dark: "#0F172A",
        mid: "#44a1a0",
        light: "#FFFFFF"
      },
      height: {
        "60v": "75vh",
        "30v": "33.3vh",
        "half": "50vh"
      }
    },
  },
  plugins: [],
}
