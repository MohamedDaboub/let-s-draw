module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "bleu": "#547acc",
        "bleufonce": "#123456",
        "bleutransparent": "#03a9f4",
        "gris": "#b0b0b0",
        "noir": "#282C2C",
        "rouge": "#FF0101",
        "batman": "#333333",
        "batman1": "#121212"
      },
      "fontFamily": {
        "inter": "Inter, system-ui, sans-serif"
      },
      "animation": {
        "spin1": "animation: spin 1s linear"
      },
      "keyframes": {
        "spin1": { 
                   "0%": "rotate(360deg)",
                   
        }

      }



    },
  },
  plugins: [],
}
