<template>
    <button @click="count -= 1">-</button>
    <button @click="count += 1">+</button>
    <div class="tabThree">I am TabThree, current count = {{ count }}</div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.tabThree{
    color: $gold;
}
</style>