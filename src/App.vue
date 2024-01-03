<script setup>
import GameCard from "./components/GameCard.vue";
import Logo from "./components/Logo.vue";
import Footer from "./components/Footer.vue";

const text = [
  "Dynamite Headdy is a platformer... with a difference. You control a little character whose main attack comes from his disembodied head.",
  "Yes, years before Rayman appeared, we already had a hero who used detachable appendages to attack his enemies. Rather than the traditional power-ups, Dynamite Headdy enables you to swap your head for different kinds – such as heads that heal you or heads that stick on to walls. You use your head in order to climb up on platforms as well, as you can grab hold of things with it, and on certain stages of the Mega Drive/Genesis version it is used to turn the game into a side-scrolling shooter, as you gain a propeller, jet, or bird head. Basically, Dynamite Headdy is just a traditional platformer at heart.",
];

const title = "Dynamite Headdy";
</script>

<template>
  <div class="font-pixeloid">
    <Logo />
    <div
      class="p-4 grid grid-cols-none sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 bg-black bg-opacity-70"
    >
      <div v-for="number in 20" :key="number">
        <GameCard :number="number" :title="title + ' ' + number" :text="text" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
