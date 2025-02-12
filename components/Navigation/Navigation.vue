<template>
  <nav>
    <Burger @click="toggleMenu" />

    <ul :class="{ hideNavigation: !isMenuActive }">
      <li v-for="item in menuItems" :key="item.label">
        <nuxt-link class="link" :to="item.to" @click="closeMenu">
          <div class="menu-btn" v-text="item.label" />
          <div class="underline" />
        </nuxt-link>
      </li>
    </ul>
  </nav>

  <div
    :class="['overlay', { 'overlay-active': isMenuActive }]"
    @click="closeMenu"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Burger from "./Burger.vue";

type menuItem = {
  label: string;
  to?: string;
};

const menuItems: menuItem[] = [
  { label: "Úvod", to: "/" },
  { label: "Služby", to: "/sluzby" },
  { label: "PartyLite", to: "/partylite" },
  { label: "Ceník", to: "/cenik" },
  { label: "Kontakt", to: "/kontakt" },
];

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}

function closeMenu() {
  isMenuActive.value = false;
}
</script>

<style scoped lang="scss">
@use "assets/css/variables" as vars;
@use "assets/css/mixins";
@use "sass:math";

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition-duration: 0.3s, visibility 0.3s;
  opacity: 0;
  visibility: hidden;
}

.overlay-active {
  opacity: 1;
  visibility: visible;
}

nav {
  min-height: 81px;
}

.hideNavigation {
  @include mixins.display("sm") {
    transform: translateX(-50vw);
  }
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;

  @include mixins.display("md") {
    & {
      justify-content: flex-end;
      gap: 2px;
    }
  }

  @include mixins.display("sm") {
    & {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 50vw;
      height: 100vh;
      background-color: vars.$pink;
      z-index: 101;
      transition: transform 0.3s;
    }
  }
}

.menu-btn {
  padding: 30px 15px;
}

.link {
  color: vars.$black;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    .underline {
      opacity: 1;
    }
  }

  @include mixins.display("sm") {
    & {
      color: vars.$white;
    }

    &:hover {
      opacity: 0.5;
    }
  }
}

.router-link-active > .underline {
  opacity: 1;
}

.router-link-active {
  @include mixins.display("sm") {
    & {
      opacity: 0.5;
    }
  }
}

$underline-height: 3px;
.underline {
  position: absolute;
  opacity: 0;
  background-color: vars.$pink;
  height: $underline-height;
  border-radius: math.div($underline-height, 2);
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.3s;
}
</style>
