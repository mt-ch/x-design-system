<script lang="ts">
  import { reactive, computed, defineComponent, PropType } from "vue";
  import "../../styles/index.scss"

  export default defineComponent({
    name: "badge",
    inheritAttrs: false,
    props: {
      variant: {
        type: String as PropType<string>,
        default: "primary",
      },
      size: {
        type: String,
        default: "large",
      },
      label: {
        type: String as PropType<string>,
        default: undefined,
      },
      rounded: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props) {
      props = reactive(props);
      return {
        classes: computed(() => ({
          "png-badge": true,
          [`-size-${props.size}`]: true,
          [`-variant-${props.variant}`]: true,
          [`-rounded`]: props.rounded,
        })),
      };
    },
  });
</script>

<template>
  <span :class="classes">
    {{ label }}
  </span>
</template>
