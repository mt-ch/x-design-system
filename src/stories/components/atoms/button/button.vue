<script>
  import { reactive, computed } from "vue";
  import "../../../../scss/styles.scss";

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
      color: {
        type: String,
        default: "Primary",
      },
      size: {
        type: String,
        default: "Medium",
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      ariaLabel: {
        type: String,
      },
    },

    setup(props, { emit }) {
      props = reactive(props);
      // let computedClass = "";

      // // Colors
      // if (props.color == "primary") computedClass = "-primary";
      // else if (props.color == "secondary") computedClass = "-secondary";
      // else if (props.color == "light") computedClass = "-light";
      // else if (props.color == "dark") computedClass = "-dark";

      // // Size
      // if (props.size == "small") computedClass += " -sm";
      // else if (props.size == "medium") computedClass += " -md";
      // else if (props.size == "large") computedClass += " -lg";

      // if(props.rounded) computedClass += " -rounded"

      return {
        // computedClass,
        classes: computed(() => ({
          "png-btn": true,
          [`-variant-${props.color}`]: true,
          [`-size-${props.size}`]: true,
        })),
      };
    },
  };
</script>

<template>
  <button v-if="disabled" type="button" class="-disabled" :class="classes" disabled>
    <span class="label block">{{ label }}</span>
  </button>
  <a v-else-if="link" :href="link" :target="target" :class="classes"
    ><span class="label block">{{ label }}</span></a
  >
  <button v-else type="button" :class="classes">
    <span class="label block">{{ label }}</span>
  </button>
</template>
