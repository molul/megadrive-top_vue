<script setup>
import NavigationButtons from "../NavigationButtons.vue";
import Title from "../Title.vue";

defineProps(["data"]);
const emit = defineEmits(["clickNext", "clickPrev"]);
</script>

<template>
  <div
    v-if="data"
    class="w-full lg:w-1/3 sticky top-0 flex flex-col gridBg bg-black py-2 md:py-0"
  >
    <div class="flex flex-col overflow-hidden sticky top-0">
      <!-- Boxart with nav buttons mobile -->
      <div
        class="relative flex items-center justify-between gap-4 h-full py-2 lg:py-0"
      >
        <!-- Image -->
        <div class="w-full">
          <img
            :src="`/img/boxarts/${data.id}.webp`"
            class="lg:w-full object-contain h-full max-h-[250px] md:max-h-[500px] lg:h-auto lg:max-h-none mx-auto"
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
      <Title :text="data.name || ''" size="lg" centered="true" />

      <!-- Info -->
      <div class=" grid grid-cols-2 text-xs md:text-sm max-w-2xl mx-auto">
        
          <div class="font-bold">Genre</div>
          <div>{{ data.genres?.join(", ") }}</div>
        
        
          <div class="font-bold">Release date</div>
          <div>{{ data.year || "" }}</div>
        
        
          <div class="font-bold">Developer</div>
          <div>{{ data.developer || "" }}</div>
        
      </div>
    </div>

    <!-- Navigation buttons from 1024 -->
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center gap-4"
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
