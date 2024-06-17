import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Add from '../views/Add.vue'
import Signinup from '../views/Signinup.vue'
import Favorites from '@/views/Favorites.vue'
import Filter from '@/views/Filter.vue'

import HomeAnime from '../views/HomeAnime.vue'

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
      component: AboutView
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/Signinup',
      name: 'signinup',
      component: Signinup
    },
    {
      path: '/Favorites',
      name: 'favorites',
      component: Favorites
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

      {
        path: '/HomeAnime',
        name: 'homeAnime',
        component: HomeAnime
      } 
      
  ]
})

export default router
