module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        half: "50%",
        "2/3": "75%",
      },
    },
    colors: {
      "blue-link": "#3BB8FF",
      "purple-darker": "#241825",
      yellow: "#FBBF24",
      "yellow-dark": "#FFC01D",
      "yellow-darker": "#E1A01E",
      "yellow-darkest": "#202500",
      "yellow-reddish": "#974610",
      white: "#FFFFFF",
      "gray-900": "#202020",
      "gray-950": "#303030",
      black: "#000000",

      // Configure your color palette here
    },
    fontFamily: {
      body: ["Podkova"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
