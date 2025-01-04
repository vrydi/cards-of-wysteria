import { defineStore } from 'pinia'
import type { card } from './cardStore'
import { ref } from 'vue'

interface deckCard extends card {
  count: number
}

export const useDeckStore = defineStore('deckStore', () => {
  const deck = ref([] as deckCard[])

  function addCard(card: card) {
    const index = deck.value.findIndex((c) => c.id === card.id)
    if (index === -1) {
      deck.value.push({ ...card, count: 1 })
    } else {
      deck.value[index].count++
    }
  }

  function removeCard(card: card) {
    const index = deck.value.findIndex((c) => c.id === card.id)
    if (index === -1) {
      return
    }
    if (deck.value[index].count === 1) {
      deck.value.splice(index, 1)
    } else {
      deck.value[index].count--
    }
  }

  return { deck, addCard, removeCard }
})
