<script setup>
import { ref } from "vue";
import CloseButton from "./CloseButton.vue";

defineProps(["fullScreen", "text", "number", "showContent"]);
const showContent = ref(false);

const emit = defineEmits(["closeCard"]);
// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClose() {
  showContent.value = false;
  emit("closeCard");
}

defineExpose({ showContent });
</script>

<template>
  <div
    class="flex size-full items-center justify-center transition-all duration-300 bg-black bg-opacity-80"
    :class="{
      'opacity-100 p-6': fullScreen,
      'opacity-0': !fullScreen,
    }"
  >
    <!-- Close button -->
    <CloseButton
      @click.stop="handleClose"
      class="transition-opacity duration-300"
      :class="{
        'opacity-100': showContent,
        'opacity-0': !showContent,
      }"
    />

    <div
      class="text-xs md:text-sm lg:text-base text-white bg-gradient-to-b from-[#d82c94] to-[#3a47b2] rounded shadow-md h-full items-start border-4 border-zinc-400 gap-4 overflow-hidden"
    >
      <div
        class="flex grow flex-col md:flex-row transition-opacity duration-300"
        :class="{
          'opacity-100': showContent,
          'opacity-0': !showContent,
        }"
      >
        <!-- Boxart, name and info -->
        <div class="w-full md:w-1/3 sticky top-0 flex flex-col gap-2">
          <div class="flex flex-col overflow-hidden sticky top-0">
            <img
              src="/dynamite_headdy.png"
              class="w-2/3 md:w-full object-contain object-center mx-auto"
            />
          </div>
          <div class="font-bold text-xl px-2">Dynamite Headdy {{ number }}</div>
          <div class="flex flex-col px-2">
            <div><span class="font-bold">Genre:</span> platform, action</div>
            <div><span class="font-bold">Release date:</span> 1994</div>
            <div><span class="font-bold">Developer:</span> Treasure</div>
          </div>
        </div>
        <!-- Synopsys and screenshots -->
        <div class="w-full overflow-y-scroll h-full px-2 py-2">
          <div class="flex flex-col gap-4">
            <div class="font-bold text-lg">Synopsis</div>
            <p v-for="paragraph in text">{{ paragraph }}</p>
            <div v-for="index in 25">Testing scroll ...{{ index }}</div>
            <div class="font-bold text-lg">Screenshots</div>
            <div class="flex flex-wrap gap-4">
              <img
                src="/dynamite_headdy_ss1.png"
                class="mx-auto object-contain"
              />
              <img
                src="/dynamite_headdy_ss2.png"
                class="mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
