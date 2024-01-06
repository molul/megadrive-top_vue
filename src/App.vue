<script setup>
import { ref } from "vue";
import GameDetails from "@/components/GameDetails.vue";
import GameCard from "@/components/GameCard.vue";
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";
import BlackBg from "@/components/Layout/BlackBg.vue";

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

  gameDetails.value.number = index;
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
  gameDetails.value.showInnerContent = false;

  setTimeout(() => {
    currentCardNumber.value =
      currentCardNumber.value < gamesData.length - 1
        ? currentCardNumber.value + 1
        : 0;
    updateGameDetails(currentCardNumber.value);
  }, 200);
}

// -------------------------------------------------------------
// goToPreviousGame
// -------------------------------------------------------------
function goToPreviousGame() {
  gameDetails.value.showInnerContent = false;

  setTimeout(() => {
    currentCardNumber.value =
      currentCardNumber.value > 0
        ? currentCardNumber.value - 1
        : gamesData.length - 1;
    updateGameDetails(currentCardNumber.value);
  }, 200);
}

// -------------------------------------------------------------
// updateGameDetails
// -------------------------------------------------------------
function updateGameDetails(number) {
  gameDetails.value.data = gamesData[number];
  gameDetails.value.showInnerContent = true;
  gameDetails.value.number = number;
}
</script>

<template>
  <div class="font-main">
    <Header />

    <!-- Expandable container -->
    <GameDetails
      ref="gameDetails"
      @close="closeGameDetails()"
      @click-next="goToNextGame"
      @click-prev="goToPreviousGame"
    />

    <!-- Expandable container black bg -->
    <BlackBg :full-screen="fullScreen" />

    <!-- Content -->
    <div
      ref="cardsGrid"
      class="p-4 grid grid-cols-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-black/70"
    >
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
