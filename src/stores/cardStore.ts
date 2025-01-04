import { ref } from 'vue'
import { defineStore } from 'pinia'
import { cardsData } from '@/database/cards'

export interface card {
  id: number
  title: string
  description: string
  image: string
  defense: number
  attack: number
  cost: number
}

export const useCardStore = defineStore('cardStore', () => {
  const cards = ref([] as card[])
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  cards.value = cardsData

  return { cards }
})
