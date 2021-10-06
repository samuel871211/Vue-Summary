<template>
    <button @click="count -= 1">-</button>
    <button @click="count += 1">+</button>
    <div class="tabTwo">I am TabTwo, current count = {{ count }}</div>
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
.tabTwo{
    color: $hoverGold;
}
</style>