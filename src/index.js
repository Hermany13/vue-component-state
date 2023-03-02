import ComponentState from "./components/ComponentState.vue";
import ComponentList, { ListNode } from "./Models/ComponentList";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-component-state", ComponentState);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { ComponentList, ListNode };
export default ComponentState;
