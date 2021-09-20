<template>
  <button @click="debounceClick">debounce click 1000ms</button>
  <h1>{{ result }}</h1>
  <button @click="result = 'have not clicked'">reset</button>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      result: 'have not clicked',
    }
  },
  mounted() {
    this.debounceClick = _.debounce(this.handleClick, 1000)
  },
  unmounted() {
    this.debounceClick.cancel()
  },
  methods: {
    handleClick() {
      this.result = 'clicked'
    },
  },
}
</script>
