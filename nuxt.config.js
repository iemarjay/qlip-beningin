export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Qlip Beningin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "In the “Beningin” there were 50 founding tribes of Africa, 28 were launched first to start the 1st generation,and those 29 each multiplied by 14 to become 490 strong and courageous GINS." },
      { name: "format-detection", content: "telephone=no" },
      { hid: "theme-color", name: "theme-color", content: "#2A2A3C" },
      { hid: "author", name: "author", content: "Qlip" },
      { property: "og:type", name: "og:type", content: "website" },
      {
        hid: "msapplication-navbutton-color",
        name: "msapplication-navbutton-color",
        content: "#2A2A3C",
      },
      {
        hid: "apple-mobile-web-app-status-bar-style",
        name: "apple-mobile-web-app-status-bar-style",
        content: "#2A2A3C",
      },
      { property: "og:site_name", name: "og:site_name", content: "Qlip" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "shortcut icon", href: "/icon.png" },
    ],
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://google-fonts.nuxtjs.org/setup
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Qlip Beningin - Africa’s No.1 cross-chain NFT platform",
      short_name: "Qlip Beningin",
      description:
        "In the “Beningin” there were 50 founding tribes of Africa, 28 were launched first to start the 1st generation,and those 29 each multiplied by 14 to become 490 strong and courageous GINS.",
    },
    icon: {
      source: "/icon.jpeg",
    },
  },

  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Podkova: [100, 200, 300, 400, 500, 600, 700],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
