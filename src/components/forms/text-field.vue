<script lang="ts">
  import { reactive, computed, defineComponent, PropType } from "vue";
  import "../../styles/index.scss";

  export default defineComponent({
    name: "text-field",
    inheritAttrs: false,
    props: {
      name: {
        type: String as PropType<string>,
        required: true,
      },
      type: {
        type: String as PropType<string>,
      },
      value: {
        type: String as PropType<string>,
      },
      placeholder: {
        type: String as PropType<string>,
        default: null,
      },
      error: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      disabled: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      labelText: {
        type: String as PropType<string>,
        default: null,
      },
      multiline: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      helperText: {
        type: String as PropType<string>,
        default: null,
      },
    },
    setup(props) {
      props = reactive(props);
      return {
        classes: computed(() => ({
          "png-text-input": true,
          "-error": props.error,
        })),
        wrapperClasses: computed(() => ({
          "relative mt-1 rounded-md shadow-sm": props.error,
        })),
        helperClasses: computed(() => ({
          "png-text-input_helper-text": true,
        })),
      };
    },
  });
</script>

<template>
  <div :class="classes">
    <label :v-if="labelText" :for="name">{{ labelText }}</label>
    <div :class="wrapperClasses">
      <textarea
        v-if="multiline"
        :id="name"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        rows="4"
        :aria-invalid="error && !disabled"
        :aria-describedby="helperText ? `${name}-helper-text` : undefined"
      ></textarea>
      <input
        v-else
        :type="type"
        :id="name"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-invalid="error && !disabled"
        :aria-describedby="helperText ? `${name}-helper-text` : undefined"
      />
      <div v-if="error" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p :v-if="helperText" :id="`${name}-helper-text`" :class="helperClasses">
      {{ helperText }}
    </p>
  </div>
</template>
