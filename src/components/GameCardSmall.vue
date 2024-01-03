<script setup>
defineProps(["text", "number", "fullScreen"]);
</script>

<template>
  <div
    class="cursor-pointer text-xs md:text-sm lg:text-base text-white bg-gradient-to-b from-[#d82c94] to-[#3a47b2] rounded shadow-md flex items-start flex-col h-full gap-0 transition-opacity duration-300 overflow-hidden"
    :class="fullScreen ? 'opacity-0' : 'opacity-100'"
  >
    <!-- Boxart, name and info -->
    <div class="flex flex-col overflow-hidden h-48">
      <img
        src="/dynamite_headdy.png"
        class="object-contain object-bottom w-full"
      />
    </div>
    <div class="font-bold text-xl p-4">Dynamite Headdy {{ number }}</div>
    <!-- Synopsys and screenshots -->
    <div class="w-full px-4 pb-4 text-sm">
      {{ text.join(". ").slice(0, 200) + "..." }}
    </div>
  </div>
</template>

<style></style>
