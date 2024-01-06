<script setup>
import { Icon } from "@iconify/vue";
defineProps(["mode", "name"]);
</script>

<template>
  <div
    class="z-50 bg-mdpurple/70 hover:bg-mdpurple/100 shadow-md rounded cursor-pointer transition-colors duration-300"
    :class="{
      'relative -left-4': mode === 'desktop' && name === 'prev',
      'absolute left-2 lg:hidden': mode === 'mobile' && name === 'prev',
      'relative -right-4': mode === 'desktop' && name === 'next',
      'absolute right-2 lg:hidden': mode === 'mobile' && name === 'next',
    }"
  >
    <Icon
      :icon="
        name === 'prev'
          ? 'solar:alt-arrow-left-outline'
          : 'solar:alt-arrow-right-outline'
      "
      class="size-10"
    />
  </div>
</template>

<style></style>
