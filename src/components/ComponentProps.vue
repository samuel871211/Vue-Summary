<template>
  <div>If prop type is invaild, vue will display warning message in console</div>
  <div>{{ primaryTitle }}</div>
</template>

<script>
export default {
  props: {
    primaryTitle: String,
  },
}
</script>
