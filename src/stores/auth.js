
import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const user = ref({
    username: 'admin',
    password: 'my-password',
    isAuthenticated: false
  });

  function login() {
    user.value.isAuthenticated = true;
  }

  function logout() {
    user.value.isAuthenticated = false;
  }

  return { user, login, logout };
});
