<script setup>
import NavigationButtons from "../NavigationButtons.vue";
import Title from "../Title.vue";

defineProps(["data"]);
const emit = defineEmits(["clickNext", "clickPrev"]);
</script>

<template>
  <div
    v-if="data"
    class="w-full sm:w-1/3 sticky top-0 flex flex-col h-full bg-black/70 py-2 md:py-0"
  >
    <div class="flex flex-col overflow-hidden sticky top-0">
      <!-- Boxart with nav buttons mobile -->
      <div
        class="relative flex items-center justify-between gap-4 h-fullpy-2 md:py-0"
      >
        <!-- Image -->
        <div>
          <img
            :src="`/img/boxarts/${data.id}.webp`"
            class="w-3/5 sm:w-full object-contain mx-auto"
          />
        </div>

        <!-- Navigation buttons from tablet -->
        <NavigationButtons
          mode="mobile"
          @click-prev="emit('clickPrev')"
          @click-next="emit('clickNext')"
        />
      </div>
    </div>

    <!-- Title, info and nav buttons tablet and desktop -->
    <div class="flex flex-col gap-1 md:gap-4 p-2 md:p-4">
      <Title :text="data.name || ''" size="lg" />

      <!-- Info -->
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

    <!-- Navigation buttons from tablet -->
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center gap-4"
    >
      <NavigationButtons
        mode="desktop"
        @click-prev="emit('clickPrev')"
        @click-next="emit('clickNext')"
      />
    </div>
  </div>
</template>

<style></style>
