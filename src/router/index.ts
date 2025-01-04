import { createRouter, createWebHistory } from 'vue-router'
import DeckView from '@/views/deckView/deckView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DeckView,
    },
  ],
})

export default router
