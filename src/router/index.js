import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu1',
      name: 'menu1',
      component: () => import('../views/BirthView.vue')
    },
    {
      path: '/birth',
      name: 'birth',
      component: () => import('../views/BirthResult.vue')
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: () => import('../views/MotherView.vue')
    },
    {
      path: '/mother',
      name: 'mother',
      component: () => import('../views/MotherResult.vue')
    },
    {
      path: '/menu3',
      name: 'menu3',
      component: () => import('../views/ArtistView.vue')
    },
    {
      path: '/artist',
      name: 'artist',
      component: () => import('../views/ArtistResult.vue')
    },
    {
      path: '/menu4',
      name: 'menu4',
      component: () => import('../views/LoveView.vue')
    },
    {
      path: '/love',
      name: 'love',
      component: () => import('../views/LoveResult.vue')
    },
    {
      path: '/menu5',
      name: 'menu5',
      component: () => import('../views/WordView.vue')
    },
    {
      path: '/word',
      name: 'word',
      component: () => import('../views/WordResult.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../components/LoadingPage.vue')
    }
  ]
})

export default router
