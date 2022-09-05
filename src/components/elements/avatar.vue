<script type="ts">
  import { reactive, computed } from "vue";
  import "../../styles/index.scss";

  export default {
    name: "avatar",

    props: {
      image: {
        type: String,
      },
      imageAlt: {
        type: String,
      },
      initals: {
        type: String,
      },
      size: {
        type: String,
        default: "medium",
      },
      rounded: {
        type: Boolean,
        default: false,
      },
    },

    setup(props) {
      props = reactive(props);
      return {
        classes: computed(() => ({
          "png-avatar" : true,
          [`-size-${props.size}`]: true,
          "-rounded" : props.rounded,
          "!inline-flex items-center justify-center bg-gray-light-mid" : !props.image && props.initals,
          "overflow-hidden bg-gray-light" : !props.image && !props.initals,
        })),
      };
    },
  };
</script>

<template>
  <span v-if="image" class="relative inline-block">
    <img :class="classes" :src="image" :alt="imageAlt" />
  </span>
  <span v-else :class="classes">
    <span v-if="initals" class="text-lg font-medium leading-none text-white">{{ initals }}</span>
    <svg v-else class="h-full w-full text-gray-light-mid" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </span>
</template>
