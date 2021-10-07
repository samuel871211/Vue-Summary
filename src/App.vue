<template>
  <div style="background-color: white; z-index: 1">
    <button @click="selectedComponent = 'ClassBinding'">ClassBinding</button>
    <button @click="selectedComponent = 'ComputedVersusMethod'">ComputedVersusMethod</button>
    <button @click="selectedComponent = 'Debouncing'">Debouncing</button>
    <button @click="selectedComponent = 'Throttling'">Throttling</button>
    <button @click="selectedComponent = 'DynamicAttributes'">DynamicAttributes</button>
    <button @click="selectedComponent = 'EventHandleAdvance'">EventHandleAdvance</button>
    <button @click="selectedComponent = 'ProvideInject'">ProvideInject</button>
    <button @click="selectedComponent = 'DynamicComponentWithKeepAlive'">DynamicComponentWithKeepAlive</button>
    <button @click="selectedComponent = 'Ref'">Ref</button>
    <button @click="selectedComponent = 'Composition'">Composition</button>
    <button @click="selectedComponent = 'BeforeAfter'">BeforeAfter</button>
    <button @click="selectedComponent = 'AweSomeHTML5Features'">AweSomeHTML5Features</button>
    <button @click="selectedComponent = 'VuexMapFunctions'">VuexMapFunctions</button>
    <button @click="selectedComponent = 'InterSectionObserverAPI'">InterSectionObserverAPI</button>
    <button @click="
      complexComponent = 'ComponentProps';
      selectedComponent = ''"
    >ComponentProps</button>
    <button @click="
      complexComponent = 'NonPropAttrs';
      selectedComponent = ''"
    >NonPropAttrs</button>
    <button @click="
      complexComponent = 'Slot';
      selectedComponent = ''"
    >Slot</button>
    <button @click="
      complexComponent = 'SlotWithDefaultContent';
      selectedComponent = ''"
    >SlotWithDefaultContent</button>
    <button @click="
      complexComponent = 'NamedSlot';
      selectedComponent = ''"
    >NamedSlot</button>
    <button @click="
      complexComponent = 'ScopedSlot';
      selectedComponent = ''"
    >ScopedSlot</button>
  </div>

  <component :is="selectedComponent"></component>
  <Slot v-if="complexComponent === 'Slot'">my name is yu sheng</Slot>
  <Slot v-if="complexComponent === 'Slot'">
    <div style="color: red">it can also insert html</div>
  </Slot>
  <NonPropAttrs
    v-if="complexComponent === 'NonPropAttrs'"
    id="hello"
    class="oh my god"
    @click="excuseMe"
  />
  <ComponentProps
    v-if="complexComponent === 'ComponentProps'"
    :primaryTitle="2"
  />
  <SlotWithDefaultContent
    v-if="complexComponent === 'SlotWithDefaultContent'"
  >default is not submit</SlotWithDefaultContent>
  <NamedSlot v-if="complexComponent === 'NamedSlot'">
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
  <ScopedSlot v-if="complexComponent === 'ScopedSlot'">
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
import Throttling from './components/Throttling.vue'
import Debouncing from './components/Debouncing.vue'
import ComputedVersusMethod from './components/ComputedVersusMethod.vue'
import ClassBinding from './components/ClassBinding.vue'
import EventHandleAdvance from './components/EventHandleAdvance.vue'
import ComponentProps from './components/ComponentProps.vue'
import NonPropAttrs from './components/NonPropAttrs.vue'
import Slot from './components/Slot.vue'
import SlotWithDefaultContent from './components/SlotWithDefaultContent.vue'
import NamedSlot from './components/NamedSlot.vue'
import ScopedSlot from './components/ScopedSlot.vue'
import ProvideInject from './components/ProvideInject.vue'
import DynamicComponentWithKeepAlive from './components/DynamicComponentWithKeepAlive.vue'
import Ref from './components/Ref.vue'
import Composition from './components/Composition.vue'
import BeforeAfter from './components/BeforeAfter.vue'
import AweSomeHTML5Features from './components/AweSomeHTML5Features.vue'
import VuexMapFunctions from './components/VuexMapFunctions.vue'
import InterSectionObserverAPI from './components/InterSectionObserverAPI.vue'

export default {
  components: {
    ComputedVersusMethod,
    ClassBinding,
    Composition,
    ComponentProps,
    Debouncing,
    DynamicAttributes,
    DynamicComponentWithKeepAlive,
    EventHandleAdvance,
    NonPropAttrs,
    NamedSlot,
    Throttling,
    ProvideInject,
    Ref,
    Slot,
    SlotWithDefaultContent,
    ScopedSlot,
    BeforeAfter,
    AweSomeHTML5Features,
    VuexMapFunctions,
    InterSectionObserverAPI
  },
  data() {
    return {
      selectedComponent: 'ClassBinding',
      complexComponent: '',
      todo: [1, 2, 3, 4, 5]
    }
  },
  provide() {
    return {
      todo: this.todo,
      todoLength: this.todo.length
    }
  },
  methods: {
    excuseMe() {
      alert('NonPropAttrs clicked')
    },
  },
}
</script>
