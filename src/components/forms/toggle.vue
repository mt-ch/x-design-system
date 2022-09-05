<script lang="ts">
  import "../../styles/index.scss";
  import { computed, defineComponent, PropType, reactive } from "vue";

  export default defineComponent({
    name: "toggle",
    props: {
      modelValue: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      identifier: {
        type: String as PropType<string>,
        required: true,
      },
      labelText: {
        type: String as PropType<string>,
        default: null,
      },
      checked: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      size: {
        type: String as PropType<string>,
        default: "medium",
      },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      props = reactive(props);
      const handleChange = (event: Event) => {
        if (event && event.target) {
          return emit("update:modelValue", (event.target as HTMLInputElement).checked);
        }
      };
      return {
        classes: computed(() => ({
          "png-toggle": true,
          [`-size-${props.size}`]: props.size,
        })),
        handleChange,
      };
    },
  });
</script>

<template>
  <button
    type="button"
    class="
      bg-gray-200
      relative
      inline-flex
      h-6
      w-11
      flex-shrink-0
      cursor-pointer
      rounded-full
      border-2 border-transparent
      transition-colors
      duration-200
      ease-in-out
      focus:outline-none
      focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    "
    role="switch"
    aria-checked="false"
  >
    <span class="sr-only">Use setting</span>
    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
    <span
      aria-hidden="true"
      class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
    ></span>
  </button>

  <!-- <div :class="classes">
    <div class="vtmn-toggle_switch">
      <input type="checkbox" :id="identifier" :checked="checked" :disabled="disabled" @change="handleChange" />
      <span aria-hidden="true"></span>
    </div>
    <label :for="identifier">{{ labelText }}</label>
  </div> -->
</template>
