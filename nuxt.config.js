export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JennyKittyBaby',
    htmlAttrs: {
      lang: 'en',
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
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
    // https://github.com/juliomrqz/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://google-fonts.nuxtjs.org/options
    '@nuxtjs/google-fonts',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(_config, { loaders: { vue } }) {
      vue.transformAssetUrls.Link = ['icon']
    },
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-telemetry/
  telemetry: false,

  // https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      'Hachi Maru Pop': true,
    },
    display: 'swap',
  },

  // https://github.com/juliomrqz/nuxt-optimized-images
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },

  // https://pwa.nuxtjs.org/setup
  pwa: {
    manifest: false,
    workbox: false,
    onesignal: false,
    meta: {
      mobileApp: false,
      appleStatusBarStyle: false,
      name: 'JennyKittyBaby',
      description: 'JennyKittyBaby - genderfluid amateuer porn person',
      author: 'JennyKittyBaby',
      ogImage: false,
    },
  },
}
