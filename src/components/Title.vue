<script setup>
defineProps(["text", "size", "centered"]);
</script>

<template>
  <div
    class="font-bold"
    :class="{
      'text-xl md:text-2xl': size === 'xl',
      'text-lg md:text-xl': size === 'lg',
      'text-center': centered,
    }"
  >
    {{ text }}
  </div>
</template>

<style></style>
