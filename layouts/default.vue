<template>
  <div class="page-wrapper">
    <header>
      <Logo />
      <Navigation />
    </header>

    <div class="content">
      <slot />
    </div>

    <FooterAddress />
  </div>
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

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
