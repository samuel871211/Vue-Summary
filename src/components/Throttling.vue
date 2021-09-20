<template>
  <div style="width: 200px; height: 200px; border: 1px solid black" @mousemove="throttleMove"></div>
  <div>current mouse position will update after 1000ms {{ `${result.x}, ${result.y}` }}</div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      result: {
          x: 0,
          y: 0
      },
    }
  },
  mounted() {
    this.throttleMove = _.throttle(this.handleMove, 1000)
  },
  unmounted() {
    this.throttleMove.cancel()
  },
  methods: {
    handleMove(evt) {
      this.result = {
          x: evt.offsetX,
          y: evt.offsetY
      }
    },
  },
}
</script>
