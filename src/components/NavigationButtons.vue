<script setup>
import { Icon } from "@iconify/vue";
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["clickPrev", "clickNext"]);
defineProps(["mode"]);
</script>

<template>
  <div
    class="z-50 bg-black opacity-50 hover:opacity-100 shadow-md rounded cursor-pointer transition-opacity duration-300"
    :class="{
      'absolute left-2 md:hidden': mode === 'mobile',
    }"
    @click="emit('clickPrev')"
  >
    <Icon icon="solar:alt-arrow-left-outline" class="size-10" />
  </div>
  <div
    class="z-50 bg-black opacity-50 hover:opacity-100 shadow-md rounded cursor-pointer transition-opacity duration-300"
    :class="{
      'absolute right-2 md:hidden': mode === 'mobile',
    }"
    @click="emit('clickNext')"
  >
    <Icon icon="solar:alt-arrow-right-outline" class="size-10" />
  </div>
</template>

<style></style>
