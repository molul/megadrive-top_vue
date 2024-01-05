<script setup>
const { text, title, fullScreen, number } = defineProps([
  "text",
  "title",
  "fullScreen",
  "number",
]);
</script>

<template>
  <div
    class="relative cursor-pointer text-xs md:text-sm lg:text-base text-white rounded-lg shadow-md flex items-start flex-col h-full gap-0 transition-opacity duration-300 overflow-hidden"
  >
    <div
      class="absolute top-2 right-2 bg-black bg-opacity-50 size-10 rounded-full flex items-center justify-center"
    >
      {{ number }}
    </div>
    <!-- Boxart, name and info -->
    <div class="flex flex-col overflow-hidden h-48">
      <img
        src="/img/boxarts/dynamite_headdy.png"
        class="object-contain object-bottom w-full"
      />
    </div>
    <div class="bg-gradient-to-b from-[#ca2cd8] to-[#1d54df]">
      <div class="font-bold text-xl p-4">{{ title }}</div>
      <!-- Synopsys and screenshots -->
      <div class="w-full px-4 pb-4 text-sm">
        {{ text.join(". ").slice(0, 150) + "..." }}
      </div>
    </div>
  </div>
</template>

<style></style>
