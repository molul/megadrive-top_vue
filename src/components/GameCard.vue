<script setup>
import { ref } from "vue";
import ExpandableContainer from "./ExpandableContainer.vue";

const { number } = defineProps(["fullScreen", "number"]);

const fullScreen = ref();
function handleFullScreenChange(fullScreenValue) {
  fullScreen.value = fullScreenValue;
}

const text = [
  "Dynamite Headdy is a platformer... with a difference. You control a          little character whose main attack comes from his disembodied head.",
  "Yes, years before Rayman appeared, we already had a hero who used detachable appendages to attack his enemies. Rather than the traditional power-ups, Dynamite Headdy enables you to swap your head for different kinds – such as heads that heal you or heads that stick on to walls. You use your head in order to climb up on platforms as well, as you can grab hold of things with it, and on certain stages of the Mega Drive/Genesis version it is used to turn the game into a side-scrolling shooter, as you gain a propeller, jet, or bird head. Basically, Dynamite Headdy is just a traditional platformer at heart.",
];
</script>

<template>
  <ExpandableContainer
    @emit-full-screen="(fullScreen) => handleFullScreenChange(fullScreen)"
  >
    <div
      class="text-xs md:text-sm lg:text-base text-white bg-gradient-to-b from-[#d82c94] to-[#3a47b2] rounded shadow-md h-full flex items-start grow"
      :class="
        fullScreen
          ? 'flex-col md:flex-row overflow-y-auto border-4 border-zinc-400 gap-4'
          : 'flex-col overflow-y-hidden'
      "
    >
      <!-- Boxart, name and info -->
      <div
        class=""
        :class="{
          'w-full md:w-1/3 sticky top-0 flex flex-col gap-2': fullScreen,
          'w-full': !fullScreen,
        }"
      >
        <div
          class="flex flex-col overflow-hidden"
          :class="fullScreen ? ' sticky top-0' : 'h-48'"
        >
          <img
            src="/dynamite_headdy.png"
            :class="
              fullScreen
                ? ' w-2/3 md:w-full object-contain object-center mx-auto'
                : 'object-contain object-bottom w-full '
            "
          />
        </div>
        <div
          class="font-bold text-xl px-2"
          :class="!fullScreen ? '  py-2' : ''"
        >
          Dynamite Headdy {{ number }}
        </div>
        <div v-if="fullScreen" class="flex flex-col px-2">
          <div><span class="font-bold">Genre:</span> platform, action</div>
          <div><span class="font-bold">Release date:</span> 1994</div>
          <div><span class="font-bold">Developer:</span> Treasure</div>
        </div>
      </div>
      <!-- Synopsys and screenshots -->
      <div
        class="flex-1 w-full"
        :class="fullScreen ? 'overflow-y-auto h-full' : ''"
      >
        <div class="w-full" :class="fullScreen ? 'px-0 py-2' : 'px-2'">
          <div v-if="!fullScreen" class="text-sm">
            {{ text.join(". ").slice(0, 100) + "..." }}
          </div>
          <div v-else class="flex flex-col gap-4">
            <p v-for="paragraph in text">{{ paragraph }}</p>
            <div v-for="index in 25">{{ index }}</div>
            <div>Screenshots</div>
            <div class="flex flex-wrap gap-4">
              <img
                src="/dynamite_headdy_ss1.png"
                class="mx-auto"
                :class="fullScreen ? 'object-contain' : 'object-cover w-full'"
              />
              <img
                src="/dynamite_headdy_ss2.png"
                class="mx-auto"
                :class="fullScreen ? 'object-contain' : 'object-cover w-full'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ExpandableContainer>
</template>

<style scoped></style>
