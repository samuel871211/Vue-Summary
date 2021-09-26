<template>
    <button @click="count -= 1">-</button>
    <button @click="count += 1">+</button>
    <div>I am TabThree, current count = {{ count }}</div>
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