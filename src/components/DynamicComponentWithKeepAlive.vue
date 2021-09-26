<template>
  <div>
    <button @click="currentTab = 'TabOne'">TabOne</button>
    <button @click="currentTab = 'TabTwo'">TabTwo</button>
    <button @click="currentTab = 'TabThree'">TabThree</button>
  </div>
  <keep-alive>
    <component :is="currentTab"></component>
  </keep-alive>
</template>

<script>
import TabOne from './TabOne.vue'
import TabTwo from './TabTwo.vue'
import TabThree from './TabThree.vue'
export default {
  data() {
    return {
      currentTab: 'TabOne',
    }
  },
  components: {
    TabOne,
    TabTwo,
    TabThree,
  },
}
</script>
