<template>
  <div class="basic" :class="{ greenText, biggerFontSize }">hello world</div>
  <button @click="greenText = true">green text</button>
  <button @click="biggerFontSize = true">bigger fontSize</button>
  <button
    @click="
      greenText = false;
      biggerFontSize = false
    "
  >
    reset
  </button>
</template>

<script>
export default {
  data() {
    return {
      greenText: false,
      biggerFontSize: false,
    }
  },
}
</script>

<style scoped>
.basic {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}
.greenText {
  color: green;
}
.biggerFontSize {
  font-size: 20px;
}
</style>
