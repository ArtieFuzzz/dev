<script lang="ts" setup>
const colorMode = useColorMode()

const updateTheme = () => {
  const currentTheme = colorMode.preference
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  colorMode.preference = newTheme
}
</script>

<template>
  <div class="flex flex-row">
    <div
      class="flex flex-col items-start justify-center w-full h-screen px-10 py-16"
    >
      <div>
        <h1 class="text-6xl font-heading">
          Hi, I'm <span class="title-gradient">Artie</span>
        </h1>
        <p class="max-w-6xl text-base">
          Howdy! My name’s Artie, though many call me other names such as Artsy.
          I’m from Australia and I have a passion for programming, networking,
          and anything else relating to computers / technology. I love spending
          my time with friends, listening to music, reading documentation, and
          of course programming!

          <br />
          <br />

          I currently work at my friend’s company XtremeFX as the Full-stack
          Developer / Engineer, there’s been slow progress within the company,
          though all is well.

          <br />
          <br />

          If you wish to talk with me, please be nice! I’m shy around new people
          I’m not familiar with.
        </p>
      </div>
    </div>
    <!-- Nav-->
    <div
      class="flex flex-col items-center justify-between w-44 h-screen px-5 py-10 my-auto border-l-2 border-accent"
    >
      <button @click="updateTheme()">
        <div
          class="relative z-0 w-8 h-8 duration-100 ease-in-out rounded-full sun dark:bg-gradient-to-tr dark:from-[#8983F7] dark:to-[#A3DAFB]"
        >
          <div
            class="absolute w-6 h-6 scale-0 rounded-full bg-blue dark:scale-100 top-0.5 z-10 ease-in-out -right-0.5 duration-300 moon"
          ></div>
        </div>
      </button>

      <div class="text-gray-500 flex flex-col items-center justify-center">
        Made with
        <div>
          <IconCSS name="teenyicons:tailwind-outline" /> &
          <IconCSS name="teenyicons:nuxtjs-outline" />
        </div>
      </div>
    </div>
  </div>
</template>
