<script setup>
import Title from "@/components/Common/Title.vue";
import GameDetailsBgImage from "@/components/GameDetails/GameDetailsBgImage.vue";
import { ref } from "vue";

defineProps(["data"]);

const container = ref();

defineExpose({ container });
</script>

<template>
  <div
    ref="container"
    v-if="data"
    class="w-full overflow-y-scroll h-full px-2 py-4 md:px-6 md:py-4"
  >
    <!-- Image transparent background -->
    <GameDetailsBgImage :src="`/img/boxarts/${data.id}.webp`" />

    <!-- Content -->
    <div class="flex flex-col gap-6 md:gap-6">
      <!-- Description -->
      <div class="flex flex-col gap-2 md:gap-3">
        <div class="flex flex-col gap-2 text-xs md:text-sm">
          <p v-for="paragraph in data.description">{{ paragraph }}</p>
        </div>
      </div>

      <!-- Screenshots -->
      <div class="flex flex-col gap-2 md:gap-3">
        <Title text="Screenshots" size="lg" :centered="true" />
        <div class="flex justify-center flex-wrap gap-2 md:gap-4">
          <div v-for="index in 6" class="overflow-hidden z-10">
            <a
              :href="`/img/screenshots/${data.id}_${index}.webp`"
              target="_blank"
            >
              <img :src="`/img/screenshots/${data.id}_${index}.webp`" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
