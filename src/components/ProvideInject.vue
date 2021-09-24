<template>
  <div v-for="(item, index) in todo" :key="index">{{ item }}</div>
</template>

<script>
export default {
  inject: ['todo'],
}
</script>
