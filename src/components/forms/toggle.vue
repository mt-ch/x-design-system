<script lang="ts">
  import "../../styles/index.scss";
  import { defineComponent, PropType, reactive } from "vue";

  import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

  export default defineComponent({
    name: "toggle",
    components: { Switch, SwitchGroup, SwitchLabel },
    props: {
      checked: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      label: {
        type: String as PropType<string>,
        default: null,
      },
      description: {
        type: String as PropType<string>,
        default: null,
      },
    },
    setup(props, { emit }) {
      props = reactive(props);
    },
  });
</script>

<template>
  <SwitchGroup v-if="label" as="div" class="flex items-center">
    <span v-if="label && description" class="flex flex-col mr-6">
      <SwitchLabel class="text-sm font-medium text-gray-dark cursor-pointer">{{ label }}</SwitchLabel>
      <SwitchDescription as="span" class="text-sm text-gray-mid-dark">{{ description }}</SwitchDescription>
    </span>
    <Switch v-model="checked" :class="[checked ? 'bg-primary' : 'bg-gray-light', 'png-toggle']">
      <span aria-hidden="true" :class="[checked ? 'translate-x-5' : 'translate-x-0', 'png-toggle-inner']" />
    </Switch>
    <SwitchLabel v-if="label && !description" as="span" class="ml-3 cursor-pointer">
      <span class="text-sm font-medium text-gray-dark">{{ label }}</span>
    </SwitchLabel>
  </SwitchGroup>
  <Switch v-else v-model="checked" :class="[checked ? 'bg-primary' : '  bg-gray-light', 'png-toggle']">
    <span aria-hidden="true" :class="[checked ? 'translate-x-5' : 'translate-x-0', 'png-toggle-inner']" />
  </Switch>
</template>
