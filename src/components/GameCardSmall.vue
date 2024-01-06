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
          'object-[65%_40%]': data.year >= 1994 && data.name === 'FIFA 95',
          'object-[50%_40%]': data.year < 1994,
        }"
        :src="`/img/boxarts/${data.id}.webp`"
      />
    </div>
    <div class="bg-gradient-to-b from-[#ca2cd8] to-[#1d54df] w-full h-full">
      <div class="font-bold text-lg lg:text-xl p-4 h-full text-center">
        {{ data.name }}
      </div>
    </div>
  </div>
</template>

<style></style>
