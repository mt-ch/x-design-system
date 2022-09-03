<template>
  <!-- <button v-if="disabled" type="button" class="button -disabled" :class="computedClass" disabled>
    <span class="label block">{{ label }}</span>
  </button>
  <a v-else-if="link" :href="link" :target="target" class="button" :class="computedClass"
    ><span class="label block">{{ label }}</span></a
  >
  <button v-else type="button" class="button" :class="computedClass">
    <span class="label block">{{ label }}</span>
  </button> -->
  <span v-if="image" class="relative inline-block">
    <img class="avatar" :class="computedClass" :src="image" :alt="imageAlt" />
    <!-- <span class="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full bg-red-400 ring-2 ring-white"></span> -->
  </span>
  <span v-else class="avatar overflow-hidden bg-gray-100">
    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </span>
</template>

<script>
  import { reactive, computed } from "vue";
  import "../../../../scss/styles.scss";

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
        default: "Medium",
      },
      circular: {
        type: Boolean,
        default: true,
      },
      notification: {
        type: Boolean,
        default: false,
      },
    },

    setup(props, { emit }) {
      props = reactive(props);
      let computedClass = "";
      let src = "";
      // Colors
      //   if (props.color == "primary") computedClass = "-primary";
      //   else if (props.color == "secondary") computedClass = "-secondary";
      //   else if (props.color == "light") computedClass = "-light";
      //   else if (props.color == "dark") computedClass = "-dark";

      // Size
      if (props.size == "small") computedClass += " -sm";
      else if (props.size == "medium") computedClass += " -md";
      else if (props.size == "large") computedClass += " -lg";

      // Rounded
      if (!props.circular) computedClass += " -rounded";

      // Image
      //   if(props.image) src = props.image;

      const classes = []
    //   if (this.round) {
    //     classes.push('rounded-full')
    //   }
    //   if (this.type === 'primary') {
    //     classes.push('bg-blue-500 hover:bg-blue-700')
    //   } else if (this.type === 'secondary') {
    //     classes.push('bg-gray-500 hover:bg-gray-700')
    //   }
    //   return classes.join(' ')

      return {
        // computedClass,
        // classes: computed(() => ({
        //     classes = [];
            
        // })),
      };
    },
  };
</script>
