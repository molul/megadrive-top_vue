<script setup>
defineProps(["fullScreen"]);
</script>

<template>
  <div
    class="bg-black fixed top-0 left-0 w-screen h-screen z-30 pointer-events-none transition-opacity duration-300"
    :class="{
      'opacity-80': fullScreen,
      'opacity-0': !fullScreen,
    }"
  >
    &nbsp;
  </div>
</template>

<style></style>
