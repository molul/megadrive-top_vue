<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

const fullScreen = ref(false);
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

onMounted(() => {
  parentRect.value = {
    left: parent.value.getBoundingClientRect().left + "px",
    top: parent.value.getBoundingClientRect().top + "px",
    width: parent.value.getBoundingClientRect().width + "px",
    height: parent.value.getBoundingClientRect().height + "px",
    // height: "100%",
  };
  // console.log(parentRect.value);
  // console.log(child.value.getBoundingClientRect());
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
  child.value.style.zIndex = fullScreen.value ? 50 : 1;
  child.value.style.position = fullScreen.value ? "fixed" : "static";
  parent.value.style.position = fullScreen.value ? "static" : "relative";
}

// -------------------------------------------------------------
// handleClick
// -------------------------------------------------------------
function handleClick() {
  parentRect.value = getParentRect();
  console.log(parentRect.value);
  // if (!fullScreen.value) {
  //   fullScreen.value = !fullScreen.value;
  //   emit("emitFullScreen", fullScreen.value);

  //   parentRect.value = getParentRect();
  //   console.log(parentRect.value);
  //   // const parentRect = getParentRect();

  //   console.log("ON", parentRect.value);

  //   setChildRect(parentRect.value);
  //   setPositions();

  //   setTimeout(() => {
  //     setChildRect(fullScreenRect);
  //     child.value.style.padding = "20px";
  //   }, 100);
  // }
}

function closeCard() {
  fullScreen.value = false;

  emit("emitFullScreen", fullScreen.value);

  // const parentRect = getParentRect();
  console.log("OFF", parentRect.value);

  setChildRect(parentRect.value);
  child.value.style.padding = "0px";

  setTimeout(() => {
    setPositions();
  }, 500);
}
</script>

<template>
  <div ref="parent" class="cursor-pointer" @click="handleClick">
    <!-- Close button -->
    <div
      v-if="fullScreen"
      class="z-50 absolute top-2 right-2.5 text-center bg-white rounded-full shadow-lg hover:text-white transition-all cursor-pointer"
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
</template>

<style></style>
