<script setup>
import { ref } from "vue";
import CloseButton from "./CloseButton.vue";
import Title from "./Title.vue";
import { onClickOutside } from "@vueuse/core";

defineProps(["fullScreen", "title", "text", "showContent", "data"]);
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

const target = ref(null);

onClickOutside(target, (event) => console.log(event));
</script>

<template>
  <div
    class="flex size-full items-center justify-center transition-all duration-300 bg-black bg-opacity-80"
    :class="{
      'opacity-100 p-6': fullScreen,
      'opacity-0': !fullScreen,
    }"
  >
    <div class="h-full relative">
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
        ref="target"
        class="text-xs md:text-sm lg:text-base text-white bg-gradient-to-br from-[#ca2cd8] to-[#1d54df] rounded shadow-md h-full items-start border-4 border-zinc-400 gap-4 overflow-hidden w-full max-w-5xl"
      >
        <div
          class="flex grow flex-col md:flex-row transition-opacity duration-300 h-full"
          :class="{
            'opacity-100': showContent,
            'opacity-0': !showContent,
          }"
        >
          <!-- Boxart, name and info -->
          <div class="w-full sm:w-1/3 sticky top-0 flex flex-col">
            <div class="flex flex-col overflow-hidden sticky top-0">
              <img
                :src="`/img/boxarts/${data.id}.webp`"
                class="w-3/5 sm:w-full object-contain object-center mx-auto"
              />
            </div>
            <div class="flex flex-col gap-1 md:gap-2 p-2 md:p-4">
              <Title :text="data.name" size="xl" />
              <div>
                <span class="font-bold">Genre:</span>
                {{ data.genres.join(", ") }}
              </div>
              <div>
                <span class="font-bold">Release date:</span> {{ data.year }}
              </div>
              <div>
                <span class="font-bold">Developer:</span>
                {{ data.developer }}
              </div>
            </div>
          </div>
          <!-- Synopsys and screenshots -->
          <div class="w-full overflow-y-scroll h-full p-2 md:p-4">
            <div class="flex flex-col gap-4 md:gap-8">
              <div class="flex flex-col gap-2 md:gap-4">
                <Title text="Synopsis" size="lg" />
                <div class="flex flex-col gap-2">
                  <p v-for="paragraph in data.description">{{ paragraph }}</p>
                </div>
              </div>
              <div>
                <div v-for="index in 25">Testing scroll ...{{ index }}</div>
              </div>
              <div class="flex flex-col gap-2 md:gap-4">
                <Title text="Screenshots" size="lg" />
                <div class="flex flex-wrap gap-2 md:gap-4">
                  <img
                    v-for="index in 2"
                    :src="`/img/screenshots/dynamite_headdy_${index}.png`"
                    class="mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
