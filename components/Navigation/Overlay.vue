<template>
  <div :class="['overlay', { 'overlay-active': props.isActive }]" />
</template>

<script setup lang="ts">
const props = defineProps<{
  isActive: boolean;
}>();
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  transition-duration: 0.3s;
  opacity: 0;
  visibility: hidden;
}

.overlay-active {
  opacity: 1;
  visibility: visible;
}
</style>
