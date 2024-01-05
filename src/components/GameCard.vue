<script setup>
import { ref, onMounted } from "vue";
import GameCardSmall from "./GameCardSmall.vue";
import GameCardExpanded from "./GameCardExpanded.vue";

defineProps(["title", "text", "fullScreen"]);

const fullScreen = ref(false);
const showContent = ref(false);
const parent = ref();
const child = ref();
const gameCardExpanded = ref();

const parentRect = ref({
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
});

const fullScreenRect = {
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

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

    document.body.classList.add("overflow-hidden");

    parentRect.value = getParentRect();

    setChildRect(parentRect.value);
    setZIndex();

    setTimeout(() => {
      setChildRect(fullScreenRect);
    }, 100);
    setTimeout(() => {
      gameCardExpanded.value.showContent = true;
    }, 500);
  }
}

// -------------------------------------------------------------
// closeCard
// -------------------------------------------------------------
function closeCard() {
  document.body.classList.remove("overflow-hidden");
  setChildRect(parentRect.value);

  setTimeout(() => {
    fullScreen.value = false;
    setZIndex();
  }, 400);
}
</script>

<template>
  <div ref="parent" @click="handleClick">
    <!-- Actual card -->
    <GameCardSmall :title="title" :text="text" :full-screen="fullScreen" />

    <!-- Expandable container -->
    <div
      ref="child"
      class="fixed transition-all duration-[500ms]"
      :class="fullScreen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <GameCardExpanded
        ref="gameCardExpanded"
        :full-screen="fullScreen"
        :show-content="showContent"
        :title="title"
        :text="text"
        @close-card="closeCard"
      />
    </div>
  </div>
</template>

<style scoped></style>
