<script setup>
defineProps(["text", "size"]);
</script>

<template>
  <div
    class="font-bold"
    :class="{
      'text-xl': size === 'xl',
      'text-lg': size === 'lg',
    }"
  >
    {{ text }}
  </div>
</template>

<style></style>
