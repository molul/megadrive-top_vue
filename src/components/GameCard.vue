<script setup>
import { ref, onMounted, defineEmits, defineProps } from "vue";
import GameCardSmall from "./GameCardSmall.vue";

const props = defineProps(["number", "fullScreen", "data"]);

const emit = defineEmits(["openGameDetails"]);

const parent = ref();
const fullScreen = ref(false);

const parentRect = ref({
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
});

// -------------------------------------------------------------
// getParentRect
// -------------------------------------------------------------
function getParentRect() {
  return {
    left: parent.value.getBoundingClientRect().left + "px",
    top: parent.value.getBoundingClientRect().top + "px",
    width: parent.value.getBoundingClientRect().width + "px",
    height: parent.value.getBoundingClientRect().height + "px",
  };
}

// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClick() {
  // document.body.classList.add("overflow-hidden");
  parentRect.value = getParentRect();

  emit("openGameDetails", parentRect.value, props.number);
}
</script>

<template>
  <div ref="parent" @click="handleClick" class="h-full">
    <GameCardSmall :number="number" :data="data" />
  </div>
</template>

<style scoped></style>
