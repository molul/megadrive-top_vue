<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const emit = defineEmits(["emitFullScreen"]);
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
  child.value.style.position = fullScreen.value ? "fixed" : "static";
  child.value.style.zIndex = fullScreen.value ? 50 : 1;
}

// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClick() {
  console.log("pum");
  if (!fullScreen.value) {
    fullScreen.value = !fullScreen.value;
    emit("emitFullScreen", fullScreen.value);

    const parentRect = getParentRect();

    if (fullScreen.value) {
      setChildRect(parentRect);
      setPositions();

      setTimeout(() => {
        setChildRect(fullScreenRect);
        child.value.style.padding = "20px";
      }, 100);
    } else {
      // setChildRect(parentRect);
      // child.value.style.padding = "0px";
      // setTimeout(() => {
      //   setPositions();
      // }, 500);
    }
  }
}

function closeCard() {
  fullScreen.value = false;

  emit("emitFullScreen", fullScreen.value);

  const parentRect = getParentRect();

  setChildRect(parentRect);
  child.value.style.padding = "0px";

  setTimeout(() => {
    setPositions();
  }, 500);
}
</script>

<template>
  <div ref="parent" class="h-full">
    <div
      ref="child"
      class="transition-all duration-[500ms] ease-out bg-black"
      :class="fullScreen ? 'bg-opacity-50 ' : 'bg-opacity-0 cursor-pointer '"
      @click="handleClick"
    >
      <div
        v-if="fullScreen"
        class="absolute top-2 right-2.5 text-center rounded-full bg-white shadow-lg hover:text-white transition-all cursor-pointer"
        :class="fullScreen ? 'opacity-100' : 'opacity-0'"
        @click.stop="closeCard"
      >
        <Icon
          icon="solar:close-circle-bold"
          size="80"
          class="size-10 text-sky-600 hover:text-sky-500"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<style></style>
