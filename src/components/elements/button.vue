<script type="ts">
  import { reactive, computed } from "vue";
  import "../../styles/index.scss"

  export default {
    name: "button",
    props: {
      label: {
        type: String,
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      link: {
        type: String,
      },
      target: {
        type: String,
      },
      variant: {
        type: String,
        default: "primary",
      },
      size: {
        type: String,
        default: "medium",
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      ariaLabel: {
        type: String,
      },
    },

    setup(props) {
      props = reactive(props);
      return {
        classes: computed(() => ({
          "png-btn": true,
          [`-variant-${props.variant}`]: true,
          [`-size-${props.size}`]: true,
          "-rounded" : props.rounded,
        })),
      };
    },
  };
</script>

<template>
  <a v-if="link" :href="link" :target="target" :class="classes" :disabled="disabled"
    ><span class="label block">{{ label }}</span>
  </a>
  <button v-else v-bind="$attrs" :class="classes" :disabled="disabled">
    <span class="label block">{{ label }}</span>
  </button>
</template>
