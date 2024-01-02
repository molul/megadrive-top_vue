<script setup>
import { ref } from "vue";

import GameCard from "./components/GameCard.vue";

const fullScreen = ref();
function handleFullScreenChange(fullScreenValue) {
  fullScreen.value = fullScreenValue;
}
</script>

<template>
  <div class="font-pixeloid h-full overflow-y-scroll">
    <div
      class="z-40 sticky top-0 text-white text-xl uppercase text-center bg-black bg-opacity-80 shadow-md"
    >
      <img src="/megadrive_logo.png" class="h-24 mx-auto" />
    </div>
    <div class="">
      <div
        class="p-4 grid grid-cols-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 bg-black bg-opacity-70"
      >
        <div v-for="number in 30">
          <GameCard :number="number" />
        </div>
      </div>
      <div class="text-white text-center bg-black bg-opacity-90 p-4">
        Developed by Luis Morcillo with Vue &copy; 2023
      </div>
    </div>
  </div>
</template>

<style scoped></style>
