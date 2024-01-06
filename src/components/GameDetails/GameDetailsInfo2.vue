<script setup>
import Title from "../Title.vue";

defineProps(["data"]);
</script>

<template>
  <div
    class="w-full sm:w-2/3 overflow-y-scroll h-full px-2 py-4 md:px-6 md:py-4"
  >
    <div class="flex flex-col gap-6 md:gap-8">
      <div class="flex flex-col gap-2 md:gap-3">
        <div
          v-if="data?.description"
          class="flex flex-col gap-2 text-xs md:text-sm"
        >
          <p v-for="paragraph in data.description">{{ paragraph }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-2 md:gap-3">
        <Title text="Screenshots" size="lg" />
        <div class="flex justify-start flex-wrap gap-2 md:gap-4">
          <div v-if="data" v-for="index in 6" class="overflow-hidden">
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
