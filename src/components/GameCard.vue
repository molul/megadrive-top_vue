<script setup>
import { ref, onMounted, defineEmits, defineProps } from "vue";
import GameCardSmall from "./GameCardSmall.vue";

const props = defineProps(["number", "data"]);

const emit = defineEmits(["openGameDetails"]);

const parent = ref();

// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClick() {
  emit("openGameDetails", props.number);
}
</script>

<template>
  <div ref="parent" @click="handleClick" class="h-full">
    <GameCardSmall :number="number" :data="data" />
  </div>
</template>

<style scoped></style>
