import { useCardStore, type card } from '@/stores/cardStore'
import { useDeckStore } from '@/stores/deckStore'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PlayfieldView',
  props: {},

  setup() {
    const cardStore = useCardStore()
    const deckStore = useDeckStore()
    return { cardStore, deckStore }
  },

  data() {
    return {}
  },

  computed: {},

  methods: {},
})
