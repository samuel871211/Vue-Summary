<template>
  <li v-for="(item, index) in items" :key="index">
    <slot name="first" :item="item"></slot>
  </li>
  <li v-for="(value, jsonKey) in person" :key="jsonKey">
    <slot name="second" :jsonKey="jsonKey" :value="value"></slot>
  </li>
</template>

<script>
export default {
  data() {
    return {
      items: ['aaa', 'bbb', 'ccc'],
      person: {
        age: 18,
        height: 170,
        weight: 60,
        name: 'John',
        job: 'student',
      },
    }
  },
}
</script>