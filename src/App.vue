<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ComponentState :components="componentsToShow" :currentState="currentState">
      <template v-slot:slot>content test</template>
    </ComponentState>
    <button @click="test()">Test button</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mock1 from "./components/Mock1.vue";
import Mock2 from "./components/Mock2.vue";
import ComponentState from "./components/ComponentState.vue";
import ComponentList from "./Models/ComponentList";

@Component({
  components: {
    ComponentState,
  },
})
export default class App extends Vue {
  public currentState = "success";
  public componentsToShow: ComponentList = {
    success: {
      isSlot: true,
    },
    error: { component: Mock1 },
    loading: { component: Mock2 },
  };

  public test() {
    this.currentState = "error";
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
