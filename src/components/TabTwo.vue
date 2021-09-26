<template>
    <button @click="count -= 1">-</button>
    <button @click="count += 1">+</button>
    <div>I am TabTwo, current count = {{ count }}</div>
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