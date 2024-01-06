<script setup>
import Number from "./Number.vue";

defineProps(["number", "data"]);
</script>

<template>
  <div
    class="relative cursor-pointer text-xs md:text-sm lg:text-base text-white rounded-lg shadow-md flex items-start flex-col h-full gap-0 transition-opacity duration-300 overflow-hidden min-h-[300px] border-4 border-gray-300"
  >
    <!-- Number -->
    <Number :number="number" />

    <!-- Boxart, name and info -->
    <div class="w-full">
      <img
        class="object-none object-[65%_40%] w-full h-72"
        :class="{
          'object-[45%_40%]': data.year >= 1994,
          'object-[50%_40%]': data.year < 1994 || data.name === 'FIFA 95',
        }"
        :src="`/img/boxarts/${data.id}.webp`"
      />
    </div>
    <div class="gridBg w-full h-full flex flex-col items-center">
      <div
        class="flex flex-col items-center font-bold text-lg lg:text-xl p-4 text-center"
      >
        {{ data.name }}
      </div>
    </div>
  </div>
</template>

<style></style>
