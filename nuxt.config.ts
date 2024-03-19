// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "nuxt-icon",
    "@nuxtjs/plausible"
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ogImage: {
    enabled: false
  },
  fonts: {
    families: [
      { name: 'Kanit', provider: 'bunny' },
      { name: 'Outfit', provider: 'bunny' },
    ],
    defaults: {
      subsets: ["latin", "latin-ext"]
    },
    assets: {
      prefix: '/_fonts'
    },
    provider: 'bunny',
    priority: ["google"]
  },
  site: {
    name: 'ArtieFuzzz',
    url: 'https://dev.astolfo.cafe',
    description: 'Software Developer | AU'
  },
  plausible: {
    apiHost: 'https://analytics.astolfo.cafe'
  }
})
