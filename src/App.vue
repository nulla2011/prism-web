<template>
  <header class="z-10 bg-white bg-opacity-70 backdrop-blur-sm">
    <NavBar></NavBar>
  </header>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #615466;
}

header {
  position: fixed;
  width: 100%;
}
</style>
<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue"
</script>
