<script setup>
import { useAuthStore } from '@/stores/auth';
import { RouterLink, RouterView } from 'vue-router'

</script>
<template> 
    <header>
    <div class="navbar Fixed-top" style="background-color:#272121">
      <b-navbar>
      <b-navbar-brand href="#">
        <img src="@/components/icons/logo-min.svg" class="" alt="logo">
        <RouterLink to="/" class="nav-link">Animeverse</RouterLink>
      
      <div class="">
        
        <RouterLink to="/Filter" class="nav-link">Filter</RouterLink>
        <RouterLink to="/Login" class="nav-link" >Login</RouterLink> <!--v-if="!authStore.user.isAuthenticated"-->
        <RouterLink to="/Favorites" class="nav-link">Favorites</RouterLink>
        <RouterLink to="/Add" class="nav-link">Add</RouterLink>
        <RouterLink to="/About" class="nav-link">About</RouterLink>
      </div>
      

      </b-navbar-brand>
    </b-navbar>
  </div>
    </header>
  </template>
  <style lang="scss">
  
  </style>