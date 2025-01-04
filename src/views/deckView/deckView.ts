import { useCardStore, type card } from '@/stores/cardStore'
import { useDeckStore } from '@/stores/deckStore'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DeckView',
  props: {},

  setup() {
    const cardStore = useCardStore()
    const deckStore = useDeckStore()
    return { cardStore, deckStore }
  },

  data() {
    return {}
  },

  computed: {
    cards() {
      return this.cardStore.cards
    },
    selectedCards() {
      return this.deckStore.deck
    },
    validDeck() {
      return this.deckStore.validDeck
    },
    deckMessage() {
      return this.deckStore.deckMessage
    },
  },

  methods: {
    cardSelected(card: card) {
      this.deckStore.addCard(card)
    },
    cardRemoved(card: card) {
      this.deckStore.removeCard(card)
    },
    isDisabled(card: card) {
      const index = this.selectedCards.findIndex((c) => c.id === card.id)
      return index !== -1 && this.selectedCards[index].count >= 4
    },
  },
})
