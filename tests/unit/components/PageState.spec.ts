import ComponentState from "@/components/ComponentState.vue";
import ComponentList from "@/Models/ComponentList";
import { mount, Wrapper } from "@vue/test-utils";
import { Vue } from "vue-property-decorator";
import StubComponent from "../mocks/StubComponent.vue";

describe("ComponentState Tests", () => {
  it("Should show the slot content when currentState is a isSlot Node", () => {
    const wrapper: Wrapper<Vue> = mountComponent({
      components: componentsToShow,
      currentState: "success",
    });

    expect(wrapper.text()).toBe("Slot Text");
    wrapper.destroy();
  });

  it("Should show the component content when currentState is a component Node", () => {
    const wrapper: Wrapper<Vue> = mountComponent({
      components: componentsToShow,
      currentState: "error",
    });

    expect(wrapper.text()).toBe("component");
  });
});

function mountComponent(propsData: object): Wrapper<Vue> {
  const wrapper: Wrapper<Vue> = mount(ComponentState, {
    propsData: propsData,
    slots: {
      slot: "Slot Text",
    },
  });

  return wrapper;
}

const componentsToShow: ComponentList = {
  success: {
    isSlot: true,
  },
  error: { component: StubComponent },
};
