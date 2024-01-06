<script setup>
import { ref } from "vue";
import GameDetails from "./components/GameDetails.vue";

import GameCard from "./components/GameCard.vue";
import Logo from "./components/Logo.vue";
import Footer from "./components/Footer.vue";
import { gamesData } from "../data/gamesData";

const gameDetails = ref();
const fullScreen = ref();
const cardsGrid = ref();
const currentCardNumber = ref();
// -------------------------------------------------------------
// openGameDetails
// -------------------------------------------------------------
function openGameDetails(index) {
  currentCardNumber.value = index;
  const parent = cardsGrid.value.children[index];
  gameDetails.value.expand(parent);

  gameDetails.value.data = gamesData[index];

  fullScreen.value = true;
}

// -------------------------------------------------------------
// closeGameDetails
// -------------------------------------------------------------
function closeGameDetails() {
  fullScreen.value = false;
}
// -------------------------------------------------------------
// goToNextGame
// -------------------------------------------------------------
function goToNextGame() {
  currentCardNumber.value =
    currentCardNumber.value < gamesData.length - 1
      ? currentCardNumber.value + 1
      : 0;
  gameDetails.value.data = gamesData[currentCardNumber.value];
  currentCardNumber.value = currentCardNumber.value;
}
// -------------------------------------------------------------
// goToPreviousGame
// -------------------------------------------------------------
function goToPreviousGame() {
  currentCardNumber.value =
    currentCardNumber.value > 0
      ? currentCardNumber.value - 1
      : gamesData.length - 1;
  gameDetails.value.data = gamesData[currentCardNumber.value];
  currentCardNumber.value = currentCardNumber.value;
}
</script>

<template>
  <div class="font-main">
    <Logo />
    <!-- Expandable container -->
    <GameDetails
      ref="gameDetails"
      @close="closeGameDetails()"
      @click-next="goToNextGame"
      @click-prev="goToPreviousGame"
    />

    <div
      class="bg-black fixed top-0 left-0 w-screen h-screen z-20 pointer-events-none transition-opacity duration-300"
      :class="{
        'opacity-80': fullScreen,
        'opacity-0': !fullScreen,
      }"
    >
      &nbsp;
    </div>

    <!-- Content -->
    <div
      ref="cardsGrid"
      class="p-4 grid grid-cols-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-black/70"
    >
      <!-- Cards -->
      <div v-for="(gameData, index) in gamesData" :key="gameData.id">
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
