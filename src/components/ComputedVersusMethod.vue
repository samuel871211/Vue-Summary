<template>
  <div>computed</div>
  <input type="text" v-model="username" placeholder="USERNAME" />
  <input type="text" v-model="password" placeholder="PASSWORD" />
  <div>{{ `${usernameChangedTime},${passwordChangedTime}` }}</div>
  <div>method</div>
  <input type="text" v-model="username1" placeholder="USERNAME" />
  <input type="text" v-model="password1" placeholder="PASSWORD" />
  <div>{{ `${handleUsernameChange()},${handlePasswordChange()}` }}</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      username1: '',
      password1: '',
    }
  },
  computed: {
    usernameChangedTime() {
      return `${this.username} update at ${Date.now()}`
    },
    passwordChangedTime() {
      return `${this.password} update at ${Date.now()}`
    },
  },
  methods: {
    handleUsernameChange() {
      return `${this.username1} update at ${Date.now()}`
    },
    handlePasswordChange() {
      return `${this.password1} update at ${Date.now()}`
    },
  }
}
</script>
