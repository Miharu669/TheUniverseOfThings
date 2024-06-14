import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Add from '../views/Add.vue'
import Login from '../views/guards/LoginView.vue'
import Favorites from '@/views/Favorites.vue'
import Filter from '@/views/Filter.vue'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import ('../views/AboutView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Favorites',
      name: 'favorites',
      component: Favorites,
      meta: { requiresAuth: true }
    },
    {
      path: '/Filter',
      name: 'Filter',
      component: Filter
    },
   /* {
      path: '/Signinup',
      name: 'signinup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Signinup.vue')
    } */
  ]
})

router.beforeEach( (to, from) => {
const store = useAuthStore()
  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
return { name:'login' }
  }

} )

export default router
