// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: ["@nuxt/fonts", "@nuxtjs/color-mode", "@nuxtjs/seo"],
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
      { name: 'Kanit', provider: 'google' },
      { name: 'Outfit', provider: 'google' },
    ],
    assets: {
      prefix: '/_fonts'
    }
  }
})
