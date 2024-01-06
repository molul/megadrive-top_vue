<script setup>
import { ref, defineExpose, defineEmits } from "vue";
import CloseButton from "./CloseButton.vue";
import Title from "./Title.vue";
import { Icon } from "@iconify/vue";
import { onClickOutside } from "@vueuse/core";

const container = ref();
const content = ref();
const bgWrapper = ref();

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
      bgWrapper.value.classList.add("p-6");
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
  bgWrapper.value.classList.remove("p-6");

  setTimeout(() => {
    showContent.value = false;
    setTimeout(() => {
      fullScreen.value = false;
      setZIndex();
      container.value.classList.remove("transition-all", "duration-500");
    }, 250);
  }, 250);
}

defineExpose({ data, expand });
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
          <!-- Close button -->
          <CloseButton
            @click.stop="close"
            class="transition-opacity duration-300"
            :class="{
              'opacity-100': showInnerContent,
              'opacity-0': !showInnerContent,
            }"
          />
          <!-- Navigation buttons -->
          <div
            class="absolute -left-6 top-1/2 z-50 bg-black bg-opacity-60 rounded shadow-md"
            @click="emit('clickPrev')"
          >
            <Icon icon="solar:alt-arrow-left-outline" class="size-10" />
          </div>
          <div
            class="absolute -right-6 top-1/2 z-50 bg-black bg-opacity-60 shadow-md rounded"
            @click="emit('clickNext')"
          >
            <Icon icon="solar:alt-arrow-right-outline" class="size-10" />
          </div>
          <!-- Inner content -->
          <div
            :class="`flex grow flex-col md:flex-row transition-opacity duration-300 h-full overflow-hidden ${
              showInnerContent ? 'opacity-100' : 'opacity-0'
            }`"
          >
            <!-- Image background -->
            <div
              v-if="data"
              class="absolute bottom-0 md:top-0 right-0 overflow-hidden opacity-5 pointer-events-none"
            >
              <img :src="`/img/boxarts/${data.id}.webp`" />
            </div>
            <!-- Boxart, name and info -->
            <div v-if="data" class="w-full sm:w-1/3 sticky top-0 flex flex-col">
              <div class="flex flex-col overflow-hidden sticky top-0">
                <img
                  :src="`/img/boxarts/${data.id}.webp`"
                  class="w-3/5 sm:w-full object-contain object-center mx-auto"
                />
              </div>
              <div class="flex flex-col gap-1 md:gap-4 p-2 md:p-4">
                <Title :text="data.name || ''" size="lg" />
                <div class="text-xs md:text-sm">
                  <div>
                    <span class="font-bold">Genre:</span>
                    {{ data.genres?.join(", ") }}
                  </div>
                  <div>
                    <span class="font-bold">Release date:</span>
                    {{ data.year || "" }}
                  </div>
                  <div>
                    <span class="font-bold">Developer:</span>
                    {{ data.developer || "" }}
                  </div>
                </div>
              </div>
            </div>
            <!-- Synopsys and screenshots -->
            <div class="w-full sm:w-2/3 overflow-y-scroll h-full p-2 md:p-4">
              <div class="flex flex-col gap-4 md:gap-8">
                <div class="flex flex-col gap-2 md:gap-4">
                  <Title text="Synopsis" size="lg" />
                  <div
                    v-if="data?.description"
                    class="flex flex-col gap-2 text-xs md:text-sm"
                  >
                    <p v-for="paragraph in data.description">{{ paragraph }}</p>
                    <div v-for="index in 25">Testing scroll ...{{ index }}</div>
                  </div>
                </div>
                <div class="flex flex-col gap-2 md:gap-4">
                  <Title text="Screenshots" size="lg" />
                  <div class="flex justify-start flex-wrap gap-2 md:gap-4">
                    <div
                      v-for="index in 2"
                      class="w-[320px] h-[224px] overflow-hidden"
                    >
                      <img
                        :src="`/img/screenshots/dynamite_headdy_${index}.png`"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
