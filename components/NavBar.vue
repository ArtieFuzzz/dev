<script lang="ts" setup>
const colorMode = useColorMode()

const updateTheme = () => {
  const currentTheme = colorMode.preference
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  colorMode.preference = newTheme
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-between w-44 h-screen px-5 py-10 my-auto"
  >
    <button @click="updateTheme()">
      <div
        class="relative z-0 w-8 h-8 duration-100 ease-in-out rounded-full bg-sun dark:bg-moon"
      >
        <div
          class="absolute w-6 h-6 scale-0 rounded-full bg-blue dark:scale-100 top-0.5 z-10 ease-in-out -right-0.5 duration-300 bg-background"
        ></div>
      </div>
    </button>

    <div class="flex flex-col justify-center items-center gap-8">
      <div class="flex flex-row gap-2">
        <a href="https://github.com/ArtieFuzzz">
          <Icon name="simple-icons:github" width="24" height="24" />
          <span class="tooltip">GitHub</span>
        </a>
        <a href="https://git.sr.ht/~artiefuzzz">
          <Icon name="simple-icons:sourcehut" width="24" height="24" />
          <span class="tooltip">SourceHut</span>
        </a>
        <a href="https://www.codewars.com/users/ArtieFuzzz">
          <Icon name="simple-icons:codewars" width="24" height="24" />
          <span class="tooltip">CodeWar</span>
        </a>
        <a href="https://steamcommunity.com/id/ArtieFuzzz/">
          <Icon name="simple-icons:steam" width="24" height="24" />
          <span class="tooltip">Steam</span>
        </a>
      </div>

      <a href="mailto:hey@astolfo.cafe" class="font-bold text-base">Contact</a>
      <a href="/proton.asc" class="font-bold text-base">Email (PGP)</a>
      <a href="/yubikey.asc" class="font-bold text-base">YubiKey (PGP)</a>
    </div>

    <div class='flex flex-col items-center'>
      <a href="https://github.com/ArtieFuzzz/dev" class='text-sm font-body'>Source</a>
      <a href="/data-policy" class='text-sm font-body'>Privacy Policy</a>
      <div class="text-gray-500 flex flex-col items-center justify-center">
        Made with
        <div>
          <Icon name="teenyicons:tailwind-outline" /> &
          <Icon name="teenyicons:nuxtjs-outline" />
        </div>
      </div>
    </div>
  </div>
</template>
