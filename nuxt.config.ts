// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "nuxt-icon"
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
    assets: {
      prefix: '/_fonts'
    },
    priority: ["google"]
  },
  site: {
    name: 'ArtieFuzzz',
    url: 'https://dev.astolfo.cafe',
    description: 'Software Developer | AU'
  }
})
