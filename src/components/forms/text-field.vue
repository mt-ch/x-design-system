
<script lang="ts">
import { reactive, computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VtmnTextInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: '',
    },
    identifier: {
      type: String as PropType<string>,
      required: true,
    },
    labelText: {
      type: String as PropType<string>,
      default: null,
    },
    placeholder: {
      type: String as PropType<string>,
      default: null,
    },
    helperText: {
      type: String as PropType<string>,
      default: null,
    },
    multiline: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    valid: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    error: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'png-text-input': true,
        '-error': props.error,
        '-valid': props.valid,
      })),
      helperClasses: computed(() => ({
        'vtmn-text-input_helper-text': true,
        'vtmn-text-input_helper-text--error': props.error,
      })),
    };
  },
});
</script>

<template>
  <label :v-if="labelText" class="png-text-input_label" :for="identifier">
    {{ labelText }}
  </label>
  <textarea
    v-if="multiline"
    :class="classes"
    :id="identifier"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-invalid="error && !disabled"
    :aria-describedby="helperText ? `${identifier}-helper-text` : undefined"
    v-bind="$attrs"
  ></textarea>
  <div v-else class="png-text-input_container">
    <input
      type="text"
      :class="classes"
      :id="identifier"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="error && !disabled"
      :aria-describedby="helperText ? `${identifier}-helper-text` : undefined"
      v-bind="$attrs"
      @input="handleChange"
    />
    <!-- <VtmnIcon v-if="icon" :value="icon" /> -->
  </div>
  <p
    :v-if="helperText"
    :id="`${identifier}-helper-text`"
    :class="helperClasses"
  >
    {{ helperText }}
  </p>
</template>