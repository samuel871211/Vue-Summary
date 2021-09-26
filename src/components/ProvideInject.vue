<template>
  <div v-for="(item, index) in todo" :key="index">{{ item }}</div>
  <h1>總共有{{ todoLength }}個東西</h1>
</template>

<script>
export default {
  inject: ['todo', 'todoLength'],
}
</script>
