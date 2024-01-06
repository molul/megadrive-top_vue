<script setup>
import NavigationButtons from "@/components/Buttons/NavigationButtons.vue";
import Title from "@/components/Common/Title.vue";

defineProps(["data"]);
const emit = defineEmits(["clickNext", "clickPrev"]);
</script>

<template>
  <div
    v-if="data"
    class="z-10 w-full lg:w-1/3 sticky top-0 flex flex-col gridBg bg-black py-2 md:py-0"
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
      <table
        class="text-xs md:text-sm w-full max-w-lg mx-auto divide-y divide-gray-400"
      >
        <tr>
          <td class="font-bold">Genre</td>
          <td>{{ data.genres?.join(", ") }}</td>
        </tr>

        <tr>
          <td class="font-bold">Release date</td>
          <td>{{ data.year || "" }}</td>
        </tr>

        <tr>
          <td class="font-bold">Developer</td>
          <td>{{ data.developer || "" }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style></style>
