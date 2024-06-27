import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const users = ref(JSON.parse(localStorage.getItem('users')) ||[
    {
      username: 'admin',
      password: 'my-password',
      isAuthenticated: false
    }
  ]);

  //const currentUser = ref(null);
  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')));

  function saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users.value));
    localStorage.setItem('currentUser', JSON.stringify(currentUser.value));
  }

  function register(newUser) {
    const existingUser = users.value.find(user => user.username === newUser.username);
    if (existingUser) {
      throw new Error('Username already taken');
    }
    users.value.push(newUser);
    saveToLocalStorage();
  }

  function login(username, password) {
    const user = users.value.find(user => user.username === username && user.password === password);
    if (user) {
      user.isAuthenticated = true;
      currentUser.value = user;
      saveToLocalStorage();
    } else {
      throw new Error('Invalid username or password');
    }
  }

  function logout() {
    if (currentUser.value) {
      currentUser.value.isAuthenticated = false;
      currentUser.value = null;
      saveToLocalStorage();
    }
  }

  return { users, currentUser, register, login, logout, user: currentUser }; 
});
