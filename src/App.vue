<script setup>
import GameCard from "./components/GameCard.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-2 p-2 bg-sky-300">
    <div v-for="number in 8">
      <GameCard :number="number" />
    </div>
  </div>
</template>

<style scoped></style>
