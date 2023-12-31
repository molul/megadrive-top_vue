<script setup>
const { fullScreen, text } = defineProps(["fullScreen", "text"]);
</script>

<template>
  <div
    class="bg-pink-400 rounded shadow-md h-full flex flex-col items-center grow overflow-y-hidden"
  >
    <div
      class="bg-yellow-400 flex w-full"
      :class="fullScreen ? 'h-1/3' : 'h-48'"
    >
      <img
        src="/dynamite_headdy.png"
        class="mx-auto"
        :class="fullScreen ? 'object-contain' : 'object-cover w-full'"
      />
      <div v-if="fullScreen" class="p-2 flex">
        <div>Dynamite Headdy</div>
        <div>Genre: platform, action</div>
        <div>Release date: 1994</div>
        <div>{{ fullScreen }}</div>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto bg-sky-500 w-full">
      <div class="p-4 w-full">
        <div v-if="!fullScreen">
          {{ text.join(". ").slice(0, 20) + "..." }}
        </div>
        <div v-else>
          <p v-for="paragraph in text">{{ paragraph }}</p>
          <div v-for="index in 80">{{ index }}</div>
          <div class="flex gap-2">
            <img
              src="/dynamite_headdy_ss1.png"
              class="mx-auto"
              :class="fullScreen ? 'object-contain' : 'object-cover w-full'"
            />
            <img
              src="/dynamite_headdy_ss2.png"
              class="mx-auto"
              :class="fullScreen ? 'object-contain' : 'object-cover w-full'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
