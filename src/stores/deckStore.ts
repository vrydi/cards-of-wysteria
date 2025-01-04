import { defineStore } from 'pinia'
import type { card } from './cardStore'
import { computed, ref } from 'vue'

interface deckCard extends card {
  count: number
}

export const useDeckStore = defineStore('deckStore', () => {
  const deck = ref([] as deckCard[])
  const validDeckAmount = 30

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

  const deckCardsCount = computed(() => {
    return deck.value.reduce((acc, card) => {
      return acc + card.count
    }, 0)
  })

  const validDeck = computed(() => {
    return deckCardsCount.value === validDeckAmount
  })

  const deckMessage = computed(() => {
    if (deckCardsCount.value > validDeckAmount) {
      return `You have ${deckCardsCount.value - validDeckAmount} too many cards in your deck`
    } else {
      return `You have ${validDeckAmount - deckCardsCount.value} cards left to add to your deck`
    }
  })

  //   const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { deck, validDeck, deckMessage, addCard, removeCard }
})
