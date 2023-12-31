<script setup>
const { fullScreen, text } = defineProps(["fullScreen", "text"]);
</script>

<template>
  <div
    class="bg-zinc-200 rounded shadow-md h-full flex items-start grow"
    :class="
      fullScreen ? 'flex-row overflow-y-scroll' : 'flex-col overflow-y-hidden'
    "
  >
    <!-- Boxart, name and info -->
    <div
      class=""
      :class="fullScreen ? ' w-1/3 sticky top-0 flex flex-col gap-2' : 'w-full'"
    >
      <div
        class="bg-yellow-400 flex flex-col overflow-hidden"
        :class="fullScreen ? ' sticky top-0' : 'h-48'"
      >
        <img
          src="/dynamite_headdy.png"
          :class="
            fullScreen
              ? 'object-contain object-center'
              : 'object-contain object-bottom w-full '
          "
        />
      </div>
      <div
        class="h-full font-bold text-xl px-2"
        :class="!fullScreen ? 'py-2' : ''"
      >
        Dynamite Headdy
      </div>
      <div v-if="fullScreen" class="flex flex-col px-2">
        <div><span class="font-bold">Genre:</span> platform, action</div>
        <div><span class="font-bold">Release date:</span> 1994</div>
        <div><span class="font-bold">Developer:</span> Treasure</div>
      </div>
    </div>
    <!-- Synopsys and screenshots -->
    <div class="flex-1 overflow-y-auto w-full">
      <div class="p-4 w-full">
        <div v-if="!fullScreen" class="text-sm">
          {{ text.join(". ").slice(0, 100) + "..." }}
        </div>
        <div v-else>
          <p v-for="paragraph in text">{{ paragraph }}</p>
          <div v-for="index in 25">{{ index }}</div>
          <div class="flex flex-wrap gap-2">
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
