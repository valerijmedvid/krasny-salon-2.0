<template>
  <header>
    <Logo />

    <Navigation />
  </header>
  <slot />

  <FooterAddress />
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import Navigation from "~/components/Navigation/Navigation.vue";
import FooterAddress from "~/components/FooterAddress.vue";
</script>

<style scoped>
header {
  position: relative;
}
</style>
