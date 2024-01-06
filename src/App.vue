<script setup>
import { ref } from "vue";
import GameDetails from "./components/GameDetails.vue";

import GameCard from "./components/GameCard.vue";
import Logo from "./components/Logo.vue";
import Footer from "./components/Footer.vue";
import { gamesData } from "../data/gamesData";

const gameDetails = ref();
const fullScreen = ref();

// -------------------------------------------------------------
// openGameDetails
// -------------------------------------------------------------
function openGameDetails(parentRect, index) {
  gameDetails.value.data = gamesData[index];
  gameDetails.value.expand(parentRect);
  fullScreen.value = true;
}

// -------------------------------------------------------------
// closeGameDetails
// -------------------------------------------------------------
function closeGameDetails() {
  fullScreen.value = false;
}
</script>

<template>
  <div class="font-main">
    <Logo />
    <!-- Content -->
    <div
      class="p-4 grid grid-cols-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-black/70"
    >
      <!-- Expandable container -->
      <GameDetails ref="gameDetails" @close="closeGameDetails()" />

      <div
        class="bg-black fixed top-0 left-0 w-screen h-screen z-20 pointer-events-none transition-opacity duration-300"
        :class="{
          'opacity-80': fullScreen,
          'opacity-0': !fullScreen,
        }"
      >
        &nbsp;
      </div>
      <!-- Cards -->
      <div v-for="(gameData, index) in gamesData" :key="index">
        <GameCard
          :number="index"
          :data="gameData"
          @open-game-details="
            (parentRect, number) => openGameDetails(parentRect, number)
          "
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>
