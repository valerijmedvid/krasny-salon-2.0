<template>
  <nav>
    <Burger @click="toggleMenu" />

    <ul :class="{ hideNavigation: !isMenuActive }">
      <li
        v-for="item in menuItems"
        :key="item.label"
        class="nav-item"
        :class="{ 'has-dropdown': item.children }"
        @mouseleave="item.children ? (openDropdown = null) : undefined"
      >
        <!-- Simple link -->
        <nuxt-link
          v-if="!item.children"
          class="link"
          :to="item.to!"
          @click="closeMenu"
        >
          <div class="menu-btn" v-text="item.label" />
          <div class="underline" />
        </nuxt-link>

        <!-- Dropdown trigger -->
        <div
          v-else
          class="link dropdown-trigger"
          :class="{ 'services-active': isServicesActive }"
        >
          <div class="menu-btn" @click.stop="toggleDropdown(item.label)">
            {{ item.label }}
            <span class="caret" :class="{ open: openDropdown === item.label }"
              >▾</span
            >
          </div>
          <div class="underline" :class="{ visible: isServicesActive }" />
          <ul
            class="dropdown-menu"
            :class="{ 'is-open': openDropdown === item.label }"
          >
            <li v-for="child in item.children" :key="child.label">
              <nuxt-link
                :to="child.to"
                class="dropdown-link"
                @click="closeMenu"
              >
                {{ child.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>

  <Overlay :is-active="isMenuActive" @click="closeMenu" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Burger from "./Burger.vue";
import Overlay from "./Overlay.vue";

type SubMenuItem = { label: string; to: string };
type MenuItem = { label: string; to?: string; children?: SubMenuItem[] };

const menuItems: MenuItem[] = [
  { label: "Úvod", to: "/" },
  {
    label: "Služby",
    children: [
      { label: "Prodlužování řas", to: "/prodluzovani-ras" },
      { label: "Epilace Lycon", to: "/epilace-lycon" },
    ],
  },
  { label: "PartyLite", to: "/partylite" },
  { label: "Ceník", to: "/cenik" },
  { label: "Kontakt", to: "/kontakt" },
];

const route = useRoute();
const isServicesActive = computed(
  () => route.path === "/prodluzovani-ras" || route.path === "/epilace-lycon",
);

const isMenuActive = ref(false);
const openDropdown = ref<string | null>(null);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
  if (!isMenuActive.value) openDropdown.value = null;
}

function closeMenu() {
  isMenuActive.value = false;
  openDropdown.value = null;
}

function toggleDropdown(label: string) {
  // On desktop (real hover device) the dropdown is handled purely by CSS hover.
  // Only toggle via JS on touch/mobile devices.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  openDropdown.value = openDropdown.value === label ? null : label;
}
</script>

<style scoped lang="scss">
@use "assets/css/variables" as vars;
@use "assets/css/mixins";
@use "sass:math";

nav {
  min-height: 81px;
}

.hideNavigation {
  @include mixins.display("sm") {
    transform: translateX(-200px);
  }
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 4px;

  @include mixins.display("md") {
    justify-content: flex-end;
    gap: 2px;
  }

  @include mixins.display("sm") {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background-color: vars.$pink;
    z-index: 100;
    transition: transform 0.3s;
    overflow-y: auto;
  }
}

.nav-item {
  position: relative;

  @include mixins.display("sm") {
    width: 100%;
    text-align: center;
  }
}

.menu-btn {
  padding: 30px 15px;
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;

  @include mixins.display("sm") {
    padding: 18px 15px;
    justify-content: center;
  }
}

.link,
.dropdown-trigger {
  color: vars.$black;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  display: block;

  &:hover .underline,
  &.services-active .underline {
    opacity: 1;
  }

  @include mixins.display("sm") {
    color: vars.$white;

    &:hover {
      opacity: 0.8;
    }
  }
}

.caret {
  font-size: 12px;
  display: inline-block;
  transition: transform 0.2s;

  &.open {
    transform: rotate(180deg);
  }
}

// ── Desktop dropdown ──────────────────────────────────
.dropdown-menu {
  display: none;
  list-style: none;
  padding: 6px 0;
  margin: 0;
  position: absolute;
  top: calc(100% - 3px);
  left: 50%;
  transform: translateX(-50%);
  background: vars.$white;
  border-radius: 6px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  min-width: 230px;
  z-index: 200;

  @media (hover: hover) and (pointer: fine) {
    .has-dropdown:hover & {
      display: block;
    }
  }

  .dropdown-link {
    display: block;
    padding: 10px 20px;
    color: vars.$black;
    text-decoration: none;
    font-size: 14px;
    white-space: nowrap;
    font-weight: 400;
    text-transform: none;
    transition:
      background-color 0.15s,
      color 0.15s;

    &:hover {
      background-color: vars.$pink-background;
      color: vars.$pink;
    }

    &.router-link-active {
      color: vars.$pink;
      font-weight: 600;
    }
  }

  // ── Mobile dropdown ──────────────────────────────────
  @include mixins.display("sm") {
    display: none;
    position: static;
    transform: none;
    box-shadow: none;
    background: transparent;
    padding: 0 0 8px;
    border-radius: 0;
    min-width: 0;
    width: 100%;

    &.is-open {
      display: block;
    }

    .dropdown-link {
      color: rgba(255, 255, 255, 0.75);
      padding: 8px 20px;
      font-size: 13px;
      white-space: normal;
      text-align: center;

      &:hover {
        background: transparent;
        color: vars.$white;
        opacity: 1;
      }

      &.router-link-active {
        color: vars.$white;
        font-weight: 600;
      }
    }
  }
}

.router-link-active > .underline {
  opacity: 1;
}

.router-link-active {
  @include mixins.display("sm") {
    opacity: 1;
    font-weight: 600;
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

  &.visible {
    opacity: 1;
  }
}
</style>
