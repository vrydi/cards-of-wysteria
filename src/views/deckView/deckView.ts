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
  },

  methods: {
    cardSelected(card: card) {
      this.deckStore.addCard(card)
    },
    cardRemoved(card: card) {
      this.deckStore.removeCard(card)
    },
  },
})
