<script setup>
import NavigationButtons from "@/components/Buttons/NavigationButtons.vue";
import Title from "@/components/Common/Title.vue";

defineProps(["data"]);
const emit = defineEmits(["clickNext", "clickPrev"]);
</script>

<template>
  <div
    v-if="data"
    class="z-10 w-full lg:w-full lg:max-w-[280px] xl:max-w-[420px] sticky top-0 flex flex-col gridBg bg-black py-0 md:py-2 lg:py-0"
  >
    <div class="flex flex-col overflow-hidden sticky top-0">
      <!-- Boxart with nav buttons mobile -->
      <div
        class="relative flex items-center justify-between gap-4 h-full pt-2 lg:pt-0"
      >
        <!-- Image -->
        <div class="w-full">
          <a :href="`/img/boxarts/${data.id}.webp`" target="_blank">
            <img
              :src="`/img/boxarts/${data.id}.webp`"
              class="lg:w-full object-contain h-full max-h-[250px] md:max-h-[450px] lg:h-auto lg:max-h-none mx-auto"
            />
          </a>
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
    <div class="flex flex-col gap-2 md:gap-4 p-2 lg:p-4">
      <Title :text="data.name || ''" size="lg" centered="true" />

      <!-- Info -->
      <table
        class="border-collapse text-xs md:text-md w-full max-w-sm mx-auto divide-y divide-gray-400 bg-black/50"
      >
        <tr>
          <td class="border w-1/2 font-bold align-top p-1">Genre</td>
          <td class="border w-1/2 font-bold align-top p-1">
            {{ data.genres?.join(", ") }}
          </td>
        </tr>

        <tr>
          <td class="border font-bold align-top p-1">Year</td>
          <td class="border w-1/2 font-bold align-top p-1">
            {{ data.year || "" }}
          </td>
        </tr>

        <tr>
          <td class="border font-bold align-top p-1">Developer</td>
          <td class="border w-1/2 font-bold align-top p-1">
            {{ data.developer || "" }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style></style>
