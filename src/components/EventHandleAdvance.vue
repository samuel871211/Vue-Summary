<template>
  <button @click="hello($event, 'hello')">click me with to args</button>
  <button @click="hello">click me</button>
  <button @click.once="triggerOnce">trigger once</button>
  <div @click="hi(1)">
    <div @click="hi(2)">
      <div @click.stop="hi(3)">三層div都有綁click，但只會觸發最內層(防止冒泡)</div>
    </div>
  </div>
  <div @click.stop.capture="hi(1)">
    <div @click="hi(2)">
      <div @click="hi(3)">三層div都有綁click，但只會觸發最外層(捕捉+防止冒泡)</div>
    </div>
  </div>
  <div
    @mousewheel.prevent="handleWheel"
    class="square"
    :style="{ 'font-size': String(wheelFontSize) + 'px' }"
  >
    滾動滑鼠
  </div>
  <input type="text" @keydown.enter="hi('enter')" placeholder="按enter"/>
  <div></div>
  <input v-model.number="age" type="number" placeholder="v-model是number"/>
  <div>{{ age }}</div>
</template>

<script>
export default {
  data() {
    return {
      wheelFontSize: 16,
      age: 0
    }
  },
  methods: {
    hello(evt, str) {
      console.log(evt)
      console.log(str)
    },
    triggerOnce() {
      alert('trigger once')
    },
    hi(data) {
      alert(data)
    },
    handleWheel(evt) {
      if (evt.deltaY < 0 && this.wheelFontSize <= 48) {
        this.wheelFontSize += 2
      } else if (evt.deltaY > 0 && this.wheelFontSize > 2) {
        this.wheelFontSize -= 2
      }
    },
  },
  watch: {
    age() {
      console.log(this.age, typeof this.age)
    }
  }
}
</script>

<style scoped>
.square {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}
</style>