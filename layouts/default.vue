<template>
  <div class="flex flex-row scroll-smooth">
    <div
      class="w-full h-screen px-10 py-16 overflow-y-scroll fancy-scrollbar"
    >
      <slot />
    </div>
    <NavBar />
  </div>
</template>
