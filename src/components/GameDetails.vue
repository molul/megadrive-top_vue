<script setup>
import { ref, defineExpose, defineEmits } from "vue";
import CloseButton from "./CloseButton.vue";
import Title from "./Title.vue";
import NavigationButtons from "./NavigationButtons.vue";
import GameDetailsInfo1 from "./GameDetails/GameDetailsInfo1.vue";
import GameDetailsInfo2 from "./GameDetails/GameDetailsInfo2.vue";
import Number from "./Number.vue";
import { Icon } from "@iconify/vue";
import { onClickOutside } from "@vueuse/core";

const container = ref();
const content = ref();
const bgWrapper = ref();
const number = ref();
const data = ref(null);
const showContent = ref(false);
const showInnerContent = ref(false);
const fullScreen = ref(false);
const clickedCard = ref();

onClickOutside(content, (event) => {
  if (fullScreen.value) {
    close();
  }
});

const fullScreenRect = {
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

const emit = defineEmits(["close", "clickNext", "clickPrev"]);

// -------------------------------------------------------------
// getRect
// -------------------------------------------------------------
function getRect(elem) {
  return {
    left: elem.getBoundingClientRect().left + "px",
    top: elem.getBoundingClientRect().top + "px",
    width: elem.getBoundingClientRect().width + "px",
    height: elem.getBoundingClientRect().height + "px",
  };
}

// -------------------------------------------------------------
// setContainerRect
// -------------------------------------------------------------
function setContainerRect(rect) {
  Object.keys(rect).forEach((prop) => {
    container.value.style[prop] = rect[prop];
  });
}

// -------------------------------------------------------------
// setPositions
// -------------------------------------------------------------
function setZIndex() {
  container.value.style.zIndex = fullScreen.value ? 50 : -10;
}

// -------------------------------------------------------------
// expand
// -------------------------------------------------------------
function expand(card) {
  clickedCard.value = card;
  const parentRect = getRect(card);
  fullScreen.value = true;
  showContent.value = true;

  setContainerRect(parentRect);
  setZIndex();

  // Expand to fullscreen
  setTimeout(() => {
    container.value.classList.add("transition-all", "duration-500");
    setContainerRect(fullScreenRect);

    // Add padding
    setTimeout(() => {
      bgWrapper.value.classList.add("p-4");
    }, 30);

    // Show inner content
    setTimeout(() => {
      showInnerContent.value = true;
    }, 450);
  }, 150);
}

// -------------------------------------------------------------
// close
// -------------------------------------------------------------
function close() {
  const parentRect = getRect(clickedCard.value);

  emit("close");
  showInnerContent.value = false;

  document.body.classList.remove("overflow-hidden");
  setContainerRect(parentRect);
  bgWrapper.value.classList.remove("p-4");

  setTimeout(() => {
    showContent.value = false;
    setTimeout(() => {
      fullScreen.value = false;
      setZIndex();
      container.value.classList.remove("transition-all", "duration-500");
    }, 250);
  }, 250);
}

defineExpose({ data, number, expand, showInnerContent });
</script>

<template>
  <div
    ref="container"
    class="fixed"
    :class="{
      'pointer-events-auto': fullScreen,
      'pointer-events-none': !fullScreen,
    }"
  >
    <div
      ref="bgWrapper"
      class="flex size-full items-center justify-center transition-all duration-500"
    >
      <div class="flex size-full items-center justify-center">
        <div
          ref="content"
          class="relative text-xs md:text-sm lg:text-base text-white bg-gradient-to-br from-[rgba(202,44,216,1)] to-[rgba(29,84,223,1)] rounded shadow-md h-full items-start border-4 border-zinc-400 gap-4 w-full max-w-6xl transition-opacity duration-500"
          :class="{
            'opacity-0': !showContent,
          }"
        >
          <!-- Number -->
          <Number :number="number" />

          <!-- Close button -->
          <CloseButton
            @click.stop="close"
            class="transition-opacity duration-300"
            :class="{
              'opacity-100': showContent,
              'opacity-0': !showContent,
            }"
          />

          <!-- Inner content -->
          <div
            :class="`flex grow flex-col md:flex-row transition-opacity duration-300 h-full overflow-hidden ${
              showInnerContent ? 'opacity-100' : 'opacity-0'
            }`"
          >
            

            <!-- Boxart, name and info -->
            <GameDetailsInfo1
              :data="data"
              @click-next="emit('clickNext')"
              @click-prev="emit('clickPrev')"
            />

            <!-- Synopsys and screenshots -->
            <GameDetailsInfo2 :data="data" />

<!-- Image background -->
            <div
              v-if="data"
              class="absolute bottom-0 md:top-0 right-0 overflow-hidden opacity-5 pointer-events-none"
            >
              <img :src="`/img/boxarts/${data.id}.webp`" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
