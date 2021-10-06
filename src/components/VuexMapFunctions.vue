<template>
    <input :value="username" @change="handleChange"/>
    <div>store.username changes after user unfocus input: {{ username }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <div>username with prefix: {{ usernameWithPrefix }}</div>
    <div>count square: {{ countSquare }}</div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState([
            'count',
            'username'
        ]),
        ...mapGetters([
            'countSquare',
            'usernameWithPrefix'
        ])
    },
    methods: {
        handleChange(e) {
            this.$store.commit('usernameChange', e.target.value)
        },
        ...mapMutations([
            'increment',
            'decrement',
            'usernameChange'
        ])
    }
}
</script>