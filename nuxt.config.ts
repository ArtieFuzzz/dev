// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: ["@nuxt/fonts", "@nuxtjs/color-mode", "@nuxtjs/seo"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ogImage: {
    enabled: false
  }
})
