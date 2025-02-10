<template>
  <nav>
    <Burger class="burger" @click="showMenu" />

    <ul class="hideUl">
      <li v-for="item in menuItems" :key="item.label">
        <nuxt-link class="link" :to="item.to" @click="hideMenu">
          <div class="menu-btn" v-text="item.label" />
          <div class="underline" />
        </nuxt-link>
      </li>
    </ul>
  </nav>

  <div class="overlay" @click="hideMenu" />
</template>

<script setup lang="ts">
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

function showMenu() {
  const overlay = document.querySelector(".overlay");
  overlay?.classList.add("overlay-active");

  const ul = document.querySelector("ul");
  ul?.classList.remove("hideUl");
}

function hideMenu() {
  const overlay = document.querySelector(".overlay");
  overlay?.classList.remove("overlay-active");

  const ul = document.querySelector("ul");
  ul?.classList.add("hideUl");
}
</script>

<style scoped lang="scss">
@use "assets/css/variables";
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
  transition-duration: 0.3s;
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

.burger {
  width: 45px;
  margin-top: 30px;
  padding: 2px;
  margin-left: 30px;
  height: 45px;
  cursor: pointer;
  border-radius: 5px;
  background-color: variables.$pink;
  display: none;

  &:hover {
    background-color: variables.$pink-light;
  }

  @include mixins.display("sm") {
    & {
      display: inline-block;
    }
  }
}

.hideUl {
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
      background-color: variables.$pink;
      z-index: 101;
      transition-duration: 0.3s;
    }
  }
}

.menu-btn {
  padding: 30px 15px;
}

.link {
  color: variables.$black;
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
      color: variables.$white;
    }

    &:hover {
      color: variables.$black;
      opacity: 0.5;
    }
  }
}

.router-link-active > .underline {
  opacity: 1;
}

$underline-height: 3px;
.underline {
  position: absolute;
  opacity: 0;
  background-color: variables.$pink;
  height: $underline-height;
  border-radius: math.div($underline-height, 2);
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  transition-duration: 0.3s;
}
</style>
