<script setup>
import { Icon } from "@iconify/vue";

defineProps(["fullScreen", "text", "number"]);
</script>

<template>
  <div
    class="flex size-full items-center justify-center transition-opacity duration-300 p-6 bg-black bg-opacity-80"
    :class="fullScreen ? 'opacity-100' : 'opacity-0'"
  >
    <div
      class="z-50 absolute top-2 right-2.5 text-center bg-white rounded-full shadow-lg hover:text-white cursor-pointer"
      @click.stop="$emit('closeCard')"
    >
      <Icon
        icon="solar:close-circle-bold"
        size="80"
        class="size-10 text-sky-600 hover:text-sky-500 transition-colors"
      />
    </div>

    <div
      class="text-xs md:text-sm lg:text-base text-white bg-gradient-to-b from-[#d82c94] to-[#3a47b2] rounded shadow-md h-full flex items-start grow flex-col md:flex-row border-4 border-zinc-400 gap-4"
    >
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
      <div class="flex-1 w-full overflow-y-scroll h-full">
        <div class="w-full px-0 py-2">
          <div class="flex flex-col gap-4">
            <p v-for="paragraph in text">{{ paragraph }}</p>
            <div v-for="index in 25">{{ index }}</div>
            <div>Screenshots</div>
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
