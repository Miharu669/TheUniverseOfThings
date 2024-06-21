<script setup>
import { useAuthStore } from "@/stores/auth";
import { RouterLink } from "vue-router";

const store = useAuthStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar dark fixed-top">
  <div class="container-fluid">
  <a href="" class="navbar-brand me-5"> 
    <RouterLink to="/">
          <img src="@/components/icons/logo-big.svg" alt="logo" />
        </RouterLink>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <a v-if="store.user.isAuthenticated">
              <RouterLink to="/Filter" class="nav-link">Filter</RouterLink>
            </a>
                    </li>
                    <li class="nav-item">
                      <a v-if="store.user.isAuthenticated">
              <RouterLink to="/Favorites" class="nav-link">Favorites</RouterLink>
            </a>
                    </li>
                    <li class="nav-item">
                      <a v-if="store.user.isAuthenticated">
              <RouterLink to="/Add" class="nav-link">Add</RouterLink>
            </a>
                    </li>
                    <li>
                      <b-nav-item v-if="!store.user.isAuthenticated" class="btnloginav">
                      <RouterLink to="/Login" class="nav-link btn">Sign in</RouterLink>
            </b-nav-item>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style lang="scss" scoped>
.navbar {
  background-color: #181717 !important;
}

.nav-link {
  color: #e16428;
  font-family: "Poppins", sans-serif;
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
