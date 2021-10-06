<template>
    <button @click="count -= 1">-</button>
    <button @click="count += 1">+</button>
    <div class="tabOne">I am TabOne, current count = {{ count }}</div>
    <progress value="22" min="0" max="100"></progress>
    <span>
        這是一段話
        <strong>注意!!!</strong>
        <mark>我是螢光筆</mark>
        <details>這是詳細資訊</details>
    </span>
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
.tabOne{
    color: $pink;
}
</style>