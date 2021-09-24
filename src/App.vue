<template>
  <DynamicAttributes/>
  <hr/>
  <Debouncing/>
  <hr/>
  <Debouncing/>
  <hr/>
  <Throttling/>
  <hr/>
  <Throttling/>
  <hr/>
  <ComputedVersusMethod/>
  <hr/>
  <ClassBinding/>
  <hr/>
  <EventHandleAdvance/>
  <hr/>
  <ComponentProps :primaryTitle="'hello'"/>
  <hr/>
  <ComponentProps :primaryTitle="2"/>
  <hr/>
  <NonPropAttrs id="hello" class="oh my god" @click="excuseMe"/>
  <hr/>
  <Slots>my name is yu sheng</Slots>
  <hr/>
  <Slots>
    <div style="color: red">it can also insert html</div>
  </Slots>
  <hr/>
  <SlotWithDefaultContent/>
  <hr/>
  <SlotWithDefaultContent>default is not submit</SlotWithDefaultContent>
</template>

<script>
import DynamicAttributes from './components/DynamicAttributes.vue'
import Debouncing from './components/Debouncing.vue'
import Throttling from './components/Throttling.vue'
import ComputedVersusMethod from './components/ComputedVersusMethod.vue'
import ClassBinding from './components/ClassBinding.vue'
import EventHandleAdvance from './components/EventHandleAdvance.vue'
import ComponentProps from './components/ComponentProps.vue'
import NonPropAttrs from './components/NonPropAttrs.vue'
import Slots from './components/Slots.vue'
import SlotWithDefaultContent from './components/SlotWithDefaultContent.vue'

export default {
  components: {
    DynamicAttributes,
    Debouncing,
    Throttling,
    ComputedVersusMethod,
    ClassBinding,
    EventHandleAdvance,
    ComponentProps,
    NonPropAttrs,
    Slots,
    SlotWithDefaultContent
  },
  methods: {
    excuseMe() {
      alert('NonPropAttrs clicked')
    }
  }
}
</script>

<style scoped>
</style>
