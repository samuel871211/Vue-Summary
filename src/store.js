import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 0,
        username: ''
    },
    getters: {
        countSquare(state) {
            return (state.count)**2
        },
        usernameWithPrefix(state) {
            return 'UDN_' + state.username
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        usernameChange(state, payload) {
            state.username = payload
        }
    },
    actions: {
        incrementAfterOneSecond(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        }
    }
})

export default store