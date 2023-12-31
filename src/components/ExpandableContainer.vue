<script setup>
import { ref } from "vue";

const fullScreen = ref(false);
const parent = ref();
const child = ref();

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
function setPositions() {
  parent.value.style.position = fullScreen.value ? "static" : "relative";
  child.value.style.position = fullScreen.value ? "absolute" : "static";
  child.value.style.zIndex = fullScreen.value ? 50 : 1;
}

// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClick() {
  fullScreen.value = !fullScreen.value;

  const parentRect = getParentRect();

  if (fullScreen.value) {
    setChildRect(parentRect);
    setPositions();

    setTimeout(() => {
      setChildRect(fullScreenRect);
    }, 100);
  } else {
    setChildRect(parentRect);

    setTimeout(() => {
      setPositions();
    }, 500);
  }
}
</script>

<template>
  <div ref="parent" class="h-full">
    <div
      ref="child"
      class="cursor-pointer transition-all duration-[500ms] ease-out"
      @click="handleClick"
    >
      <slot />
    </div>
  </div>
</template>

<style></style>
