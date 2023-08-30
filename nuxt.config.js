const BASE_URL = process.env.API_BASE_URL

export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Inovola",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { hid: "og:description", name: "og:description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og:title", name: "og:title", content: "" },
      { hid: "keywords", name: "keywords", content: "" },
      { hid: "author", name: "author", content: "" },
      { hid: "og:url", name: "og:url", content: "" },
      { hid: "og:image", name: "og:image", content: "" },
      { hid: "og:type", name: "og:type", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  },

  css: ["~/assets/css/common.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/axios-accessor",
      ssr: true,
    },
    { src: "~plugins/calendar", ssr: false },
    "~/plugins/store-accessor",
    "~/plugins/i18n-accessor",
    { src: "~/plugins/Vuelidate" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxt/postcss8",
    [
      "@nuxtjs/moment",
      {
        defaultLocale: "en-nz",
        locales: ["ar", "en-nz"],
      },
    ],
  ],

  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    [
      "primevue/nuxt",
      {
        theme: "tailwind-light",
        components: [
          "InputText",
          "Dropdown",
          "Button",
          "Toast",
          "ImagePreview",
          "Sidebar",
          "Rating",
          "Textarea",
          "Divider",
          "Dialog",
          "Skeleton",
          "Card",
          "Paginator",
          "TabView",
          "Knob",
          "ScrollTop",
        ],
        directives: ["Tooltip", "Badge", "TabPanel"],
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_and_default",
        defaultLocale: "en",
        defaultDirection: "ltr",
        fallbackLocale: "en",
        lazy: true,
        langDir: "locales/",
        locales: [
          { code: "en", iso: "en-US", file: "en.json", dir: "ltr" },
          { code: "ar", iso: "ar-EG", file: "ar.json", dir: "rtl" },
        ],
        detectBrowserLanguage: false,
      },
    ],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "vue-social-sharing/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: BASE_URL,
  },

  generate: {
    interval: 1200,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ["primevue"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extractCSS: {
      ignoreOrder: false,
    },
    env: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    MAIN_URL: process.env.BASE_URL_MAIN,
  },
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    MAIN_URL: process.env.BASE_URL_MAIN,
  },

  privateRuntimeConfig: {
    MAIN_URL: process.env.BASE_URL_MAIN,
  },
}
