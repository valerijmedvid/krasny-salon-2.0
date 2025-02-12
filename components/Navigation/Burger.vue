<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="#c86a73"
    class="burger"
  >
    <path
      d="M150-240q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150zm0-210q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150zm0-210q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h660q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H150z"
    />
  </svg>
</template>

<style scoped lang="scss">
@use "assets/css/variables" as vars;
@use "assets/css/mixins";

.burger {
  width: 40px;
  height: 40px;
  margin: 30px 0 0 20px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid vars.$pink;
  display: none;

  &:hover {
    border-color: vars.$pink-light;
  }

  @include mixins.display("sm") {
    & {
      display: inline-block;
    }
  }
}
</style>
