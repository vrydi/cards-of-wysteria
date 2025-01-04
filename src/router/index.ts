import { createRouter, createWebHistory } from 'vue-router'
import DeckView from '@/views/deckView/deckView.vue'
import PlayfieldView from '@/views/playfieldView/playfieldView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DeckView,
    },
    {
      path: '/playfield',
      name: 'playfield',
      component: PlayfieldView,
    },
  ],
})

export default router
