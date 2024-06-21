<script setup>
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";

const store = useAuthStore();
</script>

<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar fixed-top">
      <b-navbar-brand>
        <RouterLink to="/">
          <img src="@/components/icons/logo-big.svg" alt="logo" />
        </RouterLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-dropdown text="More" variant="link" class="nav-link">
            <b-nav-item v-if="store.user.isAuthenticated">
              <RouterLink to="/Filter" class="nav-link">Filter</RouterLink>
            </b-nav-item>
            <b-nav-item v-if="store.user.isAuthenticated">
              <RouterLink to="/Favorites" class="nav-link">Favorites</RouterLink>
            </b-nav-item>
            <b-nav-item v-if="store.user.isAuthenticated">
              <RouterLink to="/Add" class="nav-link">Add</RouterLink>
            </b-nav-item>
            <b-nav-item>
              <!-- Puedes añadir aquí los elementos del menú desplegable si es necesario -->
            </b-nav-item>
          </b-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <b-nav-item v-if="!store.user.isAuthenticated" class="btnloginav">
        <RouterLink to="/Login" class="nav-link btn">Sign in</RouterLink>
      </b-nav-item>
    </b-navbar>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #181717 !important;
}

.navbar-nav .nav-link {
  color: #f6e9e9;
}

.btnloginav {
  background-color: #e16428 !important;
  border-radius: 30px;
  border-color: #e16428 !important;
  display: flex;
  align-items: center;

  .nav-link {
    color: #f6e9e9 !important;
    border-radius: 30px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #e16428 !important;
    padding: 5px 15px;
    font-size: 12px;
    font-family: "Poppins", sans-serif;

    &:hover {
      color: #f6e9e9 !important;
      background-color: #e16428 !important;
      border-color: #e16428 !important;
    }
  }
}
</style>
