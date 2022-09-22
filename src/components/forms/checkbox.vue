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
      checked: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
      value: {
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
      labelDescription: {
        type: String as PropType<string>,
        default: null,
      },
    },
    setup(props) {
      props = reactive(props);
      return {
        classes: computed(() => ({
          "png-checkbox": true,
          "-error": props.error,
          "relative flex items-start": props.labelText
        })),
        disabledClasses: computed(() => ({
          "-disabled": props.disabled,
        })),
        // wrapperClasses: computed(() => ({
        //   "relative mt-1 rounded-md shadow-sm": props.error,
        // })),
        // helperClasses: computed(() => ({
        //   "png-text-input_helper-text": true,
        // })),
      };
    },
  });
</script>

<template>
  <div v-if="labelText" :class="classes">
    <div class="flex h-5 items-center">
      <input
        :id="name"
        type="checkbox"
        :class="classes"
        :checked="checked"
        :value="value"
        :aria-describedby="name + '-description'"
        :disabled="disabled"
        :aria-invalid="error && !disabled"
      />
    </div>
    <div class="ml-3 text-sm">
      <label v-if="labelText" :for="name" class="font-medium text-gray-700">{{ labelText }}</label>
      <p v-if="labelDescription" :id="name + '-description'" class="text-gray-500">{{ labelDescription }}</p>
    </div>
  </div>
  <div v-else :class="classes">
    <input
      :id="name"
      type="checkbox"
      :checked="checked"
      :value="value"
      :disabled="disabled"
      :aria-invalid="error && !disabled"
    />
  </div>
  <!-- <div :class="classes">
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
  </div> -->
</template>
