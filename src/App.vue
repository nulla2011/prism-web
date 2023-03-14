<template>
  <header>
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
</style>
<script setup lang="ts">
import NavBar from "@/layouts/NavBar.vue"
</script>
