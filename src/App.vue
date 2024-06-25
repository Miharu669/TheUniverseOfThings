<script setup>
import Navbar from './components/Navbar2.vue';
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from "@/stores/auth.js";





</script>

<template>
  <head>
  </head>
 <Navbar></Navbar>


  <RouterView />

  <Footer></Footer>
</template>

<style scoped>



</style>
