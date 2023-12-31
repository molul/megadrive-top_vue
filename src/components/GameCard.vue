<script setup>
import ExpandableContainer from "./ExpandableContainer.vue";
const { number } = defineProps(["number"]);
</script>

<template>
  <ExpandableContainer>
    <div class="bg-red-400 p-2 rounded shadow-md h-full">{{ number }}</div>
  </ExpandableContainer>
</template>

<style scoped></style>
