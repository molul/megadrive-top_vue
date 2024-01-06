<script setup>
defineProps(["number"]);
</script>

<template>
  <div
    class="text-base md:text-lg absolute top-2 left-2 bg-black/80 border-4 border-gray-200 shadow-lg size-10 md:size-14 rounded-full flex items-center justify-center z-20"
  >
    {{ number + 1 }}
  </div>
</template>

<style></style>
