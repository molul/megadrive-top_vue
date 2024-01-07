<script setup>
import { ref, defineEmits, defineProps } from "vue";
import Number from "@/components/Common/Number.vue";

defineProps(["number", "data"]);

defineEmits(["openGameDetails"]);

const parent = ref();
</script>

<template>
  <div ref="parent" @click="$emit('openGameDetails', number)" class="h-full">
    <div
      class="relative cursor-pointer text-xs md:text-sm lg:text-base text-white rounded-lg shadow-md flex items-start flex-col h-full gap-0 transition-all duration-300 overflow-hidden border-4 border-transparent hover:border-cyan-400"
    >
      <!-- Number -->
      <Number :number="number" />

      <!-- Boxart -->
      <div class="w-full">
        <img class="w-full" :src="`/img/boxarts/${data.id}.webp`" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
