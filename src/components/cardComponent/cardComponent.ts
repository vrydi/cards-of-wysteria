import type { card } from '@/stores/cardStore'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'CardComponent',
  emits: ['card-selected'],

  props: {
    card: {
      type: Object as PropType<card>,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    listView: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {}
  },

  data() {
    return {
      preview: false,
    }
  },

  computed: {},

  methods: {
    select() {
      this.$emit('card-selected', this.card)
    },
  },
})
