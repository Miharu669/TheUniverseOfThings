import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const users = ref([
    {
      username: 'admin',
      password: 'my-password',
      isAuthenticated: false
    }
  ]);

  const currentUser = ref(null);

  function register(newUser) {
    const existingUser = users.value.find(user => user.username === newUser.username);
    if (existingUser) {
      throw new Error('Username already taken');
    }
    users.value.push(newUser);
  }

  function login(username, password) {
    const user = users.value.find(user => user.username === username && user.password === password);
    if (user) {
      user.isAuthenticated = true;
      currentUser.value = user;
    } else {
      throw new Error('Invalid username or password');
    }
  }

  function logout() {
    if (currentUser.value) {
      currentUser.value.isAuthenticated = false;
      currentUser.value = null;
    }
  }

  return { users, currentUser, register, login, logout, user: currentUser }; 
});
