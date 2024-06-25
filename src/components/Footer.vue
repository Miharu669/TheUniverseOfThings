<script setup>
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";
import { ref } from "vue";

// Acceder a la tienda de autenticación
const store = useAuthStore();
</script>

<template>
  <footer class="footer bg-dark text-light py-3 mt-4 fixed-bottom">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-4">
          <a href="/" class="text-decoration-none text-light"
            >© 2024 AnimeVerse. All rights reserved</a
          >
        </div>
        <div class="col-md-4 text-end"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $darker !important;
  font-family: "Poppins", sans-serif;
  color: $light !important;
}
</style>
