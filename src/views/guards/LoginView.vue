<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'

</script>



<template>
    <div class="Login">
      <h1>This is a Login page</h1>
      <LoginForm />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .signinup {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>