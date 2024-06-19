<script setup>
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";
import { ref } from "vue";

// Acceder a la tienda de autenticación
const store = useAuthStore();
</script>
<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar fixed-top">
    <b-navbar-brand>
      <RouterLink to="/">
        <img src="@/components/icons/logo-big.svg" alt="logo" />
      </RouterLink>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="store.user.isAuthenticated">
          <RouterLink to="/Filter" class="nav-link">Filter</RouterLink>
        </b-nav-item>
        <b-nav-item v-if="store.user.isAuthenticated">
          <RouterLink to="/Favorites" class="nav-link">Favorites</RouterLink>
        </b-nav-item>
        <b-nav-item v-if="store.user.isAuthenticated">
          <RouterLink to="/Add" class="nav-link">Add</RouterLink>
        </b-nav-item>
        <b-nav-item v-if="!store.user.isAuthenticated" class="btnloginav">
          <RouterLink to="/Login" class="nav-link btn"> Sign in </RouterLink>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: $darker !important;
}

.navbar-nav .nav-link {
  color: $light;
}

.btnloginav {
  background-color: $orange !important;
  border-radius: 30px;
  border-color: $orange !important;
  display: flex;
  align-items: center;

  .nav-link {
    color: $light !important;
    border-radius: 30px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: $orange !important;
    padding: 5px 15px;
    font-size: 12px;
    font-family: "Poppins", sans-serif;

    &:hover {
      color: $light !important;
      background-color: $orange !important;
      border-color: $orange !important;
    }
  }
}
</style>
