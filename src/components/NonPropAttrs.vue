<template>
  <div>
    {{ $attrs }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$attrs)
  },
}
</script>

<style scoped>
#hello {
  color: red;
}
</style>