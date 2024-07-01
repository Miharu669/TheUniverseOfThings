<script setup>
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const store = useAuthStore();
</script>

<template>
  <footer class="footer bg-dark text-light py-3">
    <div class="container-fluid">
      <div class="row justify-content-between align-items-center">
          <a href="/" class="text-decoration-none text-light"
            >© 2024 AnimeVerse. All rights reserved</a
          >
        <div class="col-md-4 text-end"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $darker !important;
  font-family: "Poppins", sans-serif;
  

a{
  color: $ligth-p !important;
}
}
</style>
