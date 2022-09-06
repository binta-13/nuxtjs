import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - TestSupport",
    set: "TestSupport",
    htmlAttrs: {
      lang: "en",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: ["@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/proxy"],

  axios: {
    baseURL: "http://52.77.253.103:3000/api/v1",
    
    Headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",

    },
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            Headers: {
              "Content-type": "application/json",
            },
            // url: "/auth/login",
            url: "/auth/login",
            method: "post",
            propertyName: "data.token",
          },
          // user: this.$router.push("/activity"),
          
          logout: false,
        },
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/proxy",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
