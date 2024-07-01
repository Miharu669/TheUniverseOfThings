<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
</script>

<template>
  <Navbar></Navbar>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>

<style lang="scss">
html {
  background-color: $dark;
}
main {
  width: 100% !important;
  max-width: 1220px;
  margin: 0 auto !important;
  background-color: $dark;
  min-height: calc(100vh - 113px);
}
</style>
