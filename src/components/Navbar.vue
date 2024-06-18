<script setup>
// import { useAuthStore } from '@/stores/auth';
import { RouterLink, RouterView } from 'vue-router'

// v-if="!authStore.user.isAuthenticated"
</script>
<template>
  <header>
    <nav class="navbar navbar-light text-white bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand"><img src="@/components/icons/logo-min.svg" class="" alt="logo"></a>
         <a><RouterLink to="/" class="nav-link">Animeverse</RouterLink></a>
        <RouterLink to="/Filter" class="nav-link">Filter</RouterLink>
        <RouterLink to="/Favorites" class="nav-link">Favorites</RouterLink>
        <RouterLink to="/Add" class="nav-link">Add</RouterLink>
        <RouterLink to="/About" class="nav-link">About</RouterLink>
        <button class="btn btn-outline-success" type="submit">
          <RouterLink to="/Login" class="nav-link $orange">Login</RouterLink>
        </button>
      </div>
    </nav>



  </header>
</template>
<style lang="scss">
.nav-link{
  color:#f6e9e9
}
.btn {
background-color: #e16428!important;
border-radius:  30px ;
border-color: #e16428;
display: flex;

}
</style>