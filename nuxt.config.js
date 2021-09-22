export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Solfácil',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Loading
  loading: false,
  loadingIndicator: '~/static/html/loading.html',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/structure',
      '~/components/atoms',
      '~/components/molecules',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Style Resources
  styleResources: {
    scss: ['~/assets/scss/_vars.scss'],
  },

  // Tailwind
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Moment
  moment: {
    locales: ['pt-br'],
  },

  // google fonts
  googleFonts: {
    families: {
      Rubik: [400, 500, 700],
      Lato: [400, 700],
    },
    display: 'swap',
    download: true,
    base64: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-easy-import': { prefix: '_', extensions: ['.css', '.scss'] },
        'postcss-nested': {},
      },
    },
  },

  server: {
    host: '0.0.0.0',
  },

  // env config runtime

  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
  },
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // }
}
