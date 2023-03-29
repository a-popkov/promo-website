import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Bio from '@/pages/BioPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/bio',
    name: 'Bio',
    component: Bio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
