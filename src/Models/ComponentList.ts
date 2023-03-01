import { Vue } from "vue-property-decorator";

export interface ListNode {
  isSlot?: boolean;
  component?: typeof Vue;
}

type ComponentList = Record<string, ListNode>;

export default ComponentList;
