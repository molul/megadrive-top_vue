<script setup>
import { ref } from "vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

defineProps(["videoId", "title"]);
</script>

<template>
  <div class="w-full h-full">
    <LiteYouTubeEmbed
      :id="videoId"
      :adNetwork="true"
      poster="hqdefault"
      :title="title"
    />
  </div>
</template>

<style></style>
