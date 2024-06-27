<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
</script>

<template>
  <head> </head>
  <Navbar></Navbar>

  <RouterView />

  <Footer></Footer>
</template>

<style lang="scss">
html {
  background-color: $dark;
}
main {
  width: 100% !important;
  margin: 0 auto !important;
  background-color: $dark;
}
</style>
