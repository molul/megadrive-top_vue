<script setup>
defineProps(["src"]);
</script>

<template>
  <div
    v-if="data"
    class="absolute bottom-0 md:top-0 right-0 overflow-hidden opacity-5 pointer-events-none"
  >
    <img :src="src" />
  </div>
</template>

<style></style>
