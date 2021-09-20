<template>
  <div :[attributeName]="'hello'">hello world</div>
  <button @click="attributeName = 'id'" style="color: red">id</button>
  <button @click="attributeName = 'class'" style="color: green">class</button>
  <input type="text" @[eventName]="handleEvent">
  <button @click="eventName = 'click'">clickEvent</button>
  <button @click="eventName = 'change'">changeEvent</button>
</template>

<script>

export default {
  data() {
    return {
      attributeName: 'id',
      eventName: 'click'
    }
  },
  methods: {
    handleEvent () {
      alert('handle event')
    }
  }
}
</script>

<style scoped>
  #hello {
    color: red
  }
  .hello {
    color: green
  }
</style>
