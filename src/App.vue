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
  <Slot>
    <div style="color: red">it can also insert html</div>
  </Slot>
  <hr/>
  <SlotWithDefaultContent/>
  <hr/>
  <SlotWithDefaultContent>default is not submit</SlotWithDefaultContent>
  <hr/>
  <NamedSlot>
    <template v-slot:header>
      <header>
        <h1>Here might be a page title</h1>
      </header>
    </template>

    <template v-slot:default>
      <main>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </main>
    </template>

    <template v-slot:footer>
      <footer>
        <p>Here's some contact info</p>
      </footer>
    </template>
  </NamedSlot>

  <ScopedSlot>
    <div>this is a scoped slot</div>
    <template v-slot:first="{ item }">
      <b>{{ item }}</b>
    </template>
    <template v-slot:second="{ jsonKey, value }">
      <b>{{ `${jsonKey}: ${value}` }}</b>
    </template>
  </ScopedSlot>

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
import Slot from './components/Slot.vue'
import SlotWithDefaultContent from './components/SlotWithDefaultContent.vue'
import NamedSlot from './components/NamedSlot.vue'
import ScopedSlot from './components/ScopedSlot.vue'

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
    Slot,
    SlotWithDefaultContent,
    NamedSlot,
    ScopedSlot
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
