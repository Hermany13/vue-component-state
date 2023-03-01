<template>
  <div>
    <slot v-if="componentToShow.isSlot" name="slot"></slot>
    <component v-else :is="componentToShow.component" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ComponentList, { ListNode } from "@/Models/ComponentList";

@Component
export default class ComponentState extends Vue {
  @Prop() private readonly components!: ComponentList;
  @Prop() private readonly currentState!: string;

  public get componentToShow(): ListNode {
    return this.components[this.currentState];
  }
}
</script>
