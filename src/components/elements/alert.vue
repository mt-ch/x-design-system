<script type="ts">
    import { reactive, computed } from "vue";
    import { CheckCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'
    import "../../styles/index.scss"

    export default {
      name: "alert",
      props: {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        variant: {
          type: String,
          default: "primary",
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
  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-green-800">{{title}}</p>
        <div class="mt-2 text-sm text-yellow-700">
          <p>{{description}}</p>
        </div>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button
            type="button"
            class="
              inline-flex
              rounded-md
              bg-green-50
              p-1.5
              text-green-500
              hover:bg-green-100
              focus:outline-none
              focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50
            "
          >
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>