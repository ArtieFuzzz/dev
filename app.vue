<script lang="ts" setup>
const colorMode = useColorMode()

const updateTheme = () => {
  const currentTheme = colorMode.preference
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  colorMode.preference = newTheme;
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
      class="flex flex-col items-center justify-between w-32 h-screen py-10 my-auto"
    >
      <select v-model="$colorMode.preference">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      <button @click="updateTheme()">
        {{
          $colorMode.preference === 'dark'
            ? 'Switch to Light'
            : 'Switch to Dark'
        }}
      </button>

      <footer>
        <p class="text-base text-center text-gray-500 font-body">
          Made with NuxtJS & TailwindCSS
        </p>
      </footer>
    </div>
  </div>
</template>
