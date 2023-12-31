<script setup>
import { ref } from "vue";

import GameCard from "./components/GameCard.vue";

const fullScreen = ref();
function handleFullScreenChange(fullScreenValue) {
  fullScreen.value = fullScreenValue;
}
</script>

<template>
  <div
    class="bg-sky-300 h-full p-2 grid grid-cols-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
    :class="fullScreen ? 'overflow-y-hidden' : 'overflow-y-scroll'"
  >
    <div v-for="number in 40">
      <GameCard :number="number" />
    </div>
  </div>
</template>

<style scoped></style>
