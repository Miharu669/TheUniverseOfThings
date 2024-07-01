<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { RouterLink, useRouter } from "vue-router";


const store = useAuthStore();
const router = useRouter();

function handleLogout() {
  store.logout();
  router.push("/");
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand me-5">
        <img src="@/components/icons/logo-big.svg" alt="logo" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-if="store.currentUser && store.currentUser.isAuthenticated"
          >
            <RouterLink to="/Filter" class="nav-link">Filter</RouterLink>
          </li>
          <li
            class="nav-item"
            v-if="store.currentUser && store.currentUser.isAuthenticated"
          >
            <RouterLink to="/Favorites" class="nav-link">Favorites</RouterLink>
          </li>
          <li
            class="nav-item"
            v-if="store.currentUser && store.currentUser.isAuthenticated"
          >
            <RouterLink to="/Add" class="nav-link">Add</RouterLink>
          </li>
          <li class="nav-item" v-if="!store.currentUser">
            <RouterLink to="/Login" class="nav-link btnloginav">Sign in</RouterLink>
          </li>
          <li
            class="nav-item"
            v-if="store.currentUser && store.currentUser.isAuthenticated"
          >
            <a class="nav-link" @click="handleLogout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: $darker !important;
}

.nav-link {
  color: $orange;
  font-family: $Poppins;
  text-align: center;
}

.nav-link:hover {
  text-decoration: none !important;
  color: $ligth-p !important;
}

.btnloginav {
  background-color: $orange !important;
  border-radius: 30px;
  border-color: $orange !important;
  display: inline-flex;
  align-items: center;
  color: $light;
  padding: 5px 15px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;

  &:hover {
    color: $light !important;
    background-color: $orange !important;
    border-color: $orange !important;
  }
}
</style>
