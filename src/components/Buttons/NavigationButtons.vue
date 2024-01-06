<script setup>
import { Icon } from "@iconify/vue";
import { defineProps, defineEmits } from "vue";
import NavigationButton from "@/components/Buttons/NavigationButton.vue";
defineEmits(["clickPrev", "clickNext"]);
defineProps(["mode"]);
</script>

<template>
  <NavigationButton :mode="mode" name="prev" @click="$emit('clickPrev')" />
  <NavigationButton :mode="mode" name="next" @click="$emit('clickNext')" />
</template>

<style></style>
