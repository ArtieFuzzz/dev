<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
})

defineOgImageComponent('Home', {
  title: 'Hello, World!',
  description: 'Lorem Ipsum',
  theme: '#ff0000',
  colorMode: 'dark'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
