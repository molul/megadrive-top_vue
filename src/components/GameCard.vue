<script setup>
import { ref, onMounted } from "vue";
import GameCardSmall from "./GameCardSmall.vue";
import GameCardExpanded from "./GameCardExpanded.vue";

const { number } = defineProps(["fullScreen", "number"]);

const fullScreen = ref();

const text = [
  "Dynamite Headdy is a platformer... with a difference. You control a          little character whose main attack comes from his disembodied head.",
  "Yes, years before Rayman appeared, we already had a hero who used detachable appendages to attack his enemies. Rather than the traditional power-ups, Dynamite Headdy enables you to swap your head for different kinds – such as heads that heal you or heads that stick on to walls. You use your head in order to climb up on platforms as well, as you can grab hold of things with it, and on certain stages of the Mega Drive/Genesis version it is used to turn the game into a side-scrolling shooter, as you gain a propeller, jet, or bird head. Basically, Dynamite Headdy is just a traditional platformer at heart.",
];

const parent = ref();
const child = ref();

const fullScreenRect = {
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

const parentRect = ref({
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
});

// onMounted(() => {
//   parentRect.value = {
//     left: parent.value.getBoundingClientRect().left + "px",
//     top: parent.value.getBoundingClientRect().top + "px",
//     width: parent.value.getBoundingClientRect().width + "px",
//     height: parent.value.getBoundingClientRect().height + "px",
//   };
// });
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
// setChildRect
// -------------------------------------------------------------
function setChildRect(rect) {
  Object.keys(rect).forEach((prop) => {
    child.value.style[prop] = rect[prop];
  });
}

// -------------------------------------------------------------
// setPositions
// -------------------------------------------------------------
function setZIndex() {
  child.value.style.zIndex = fullScreen.value ? 50 : 1;
}

// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClick() {
  if (!fullScreen.value) {
    fullScreen.value = !fullScreen.value;

    parentRect.value = getParentRect();

    setChildRect(parentRect.value);
    setZIndex();

    setTimeout(() => {
      setChildRect(fullScreenRect);
    }, 100);
  }
}

// -------------------------------------------------------------
// closeCard
// -------------------------------------------------------------
function closeCard() {
  setChildRect(parentRect.value);

  setTimeout(() => {
    fullScreen.value = false;
    setZIndex();
  }, 500);
}
</script>

<template>
  <div ref="parent" @click="handleClick">
    <div
      ref="child"
      class="fixed transition-all duration-[500ms]"
      :class="fullScreen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <GameCardExpanded
        :full-screen="fullScreen"
        :text="text"
        :number="number"
        @close-card="closeCard"
      />
    </div>
    <GameCardSmall :text="text" :number="number" :full-screen="fullScreen" />
  </div>
</template>

<style scoped></style>
