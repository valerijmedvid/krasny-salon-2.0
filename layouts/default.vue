<template>
  <header>
    <Logo />

    <Navigation />
  </header>
  <slot />
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import Navigation from "~/components/Navigation/Navigation.vue";
</script>

<style scoped lang="scss">
header {
  position: relative;
}
</style>
