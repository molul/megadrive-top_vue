<script setup>
import { ref } from "vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

const iframe = ref(null);

// iframe.value?.stopVideo();
// iframe.value?.pauseVideo();
// iframe.value?.playVideo();

defineProps(["videoId", "title"]);

defineExpose({ iframe });
</script>

<template>
  <div class="w-full h-full">
    <LiteYouTubeEmbed
      :id="videoId"
      ref="iframe"
      :adNetwork="true"
      poster="hqdefault"
      :title="title"
    />
  </div>
</template>

<style></style>
