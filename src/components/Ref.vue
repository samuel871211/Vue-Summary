<template>
  <div>this input will be focus automatically</div>
  <input ref="username" placeholder="username" />
</template>

<script>
export default {
  mounted() {
    this.$refs.username.focus()
  },
}
</script>
