<script type="ts">
  import { reactive, computed } from "vue";
  import { CheckCircleIcon, XCircleIcon, InformationCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/vue/24/solid';
  import "../../styles/index.scss";

  export default {
    name: "alert",
    components: { CheckCircleIcon, XCircleIcon, InformationCircleIcon, ExclamationTriangleIcon, XMarkIcon },
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
        default: "info",
      },
      withCloseButton: {
        type: Boolean,
        default: false,
      },
      onClick : {
        type: Function,
        required: true,
      }
    },

    setup(props) {
      props = reactive(props);
      return {
        backgroundClass: computed(() => ({
          "bg-success-lighter" : props.variant == "success",
          "bg-warning-lighter" : props.variant == "warning",
          "bg-info-lighter" : props.variant == "info",
          "bg-danger-lighter" : props.variant == "danger"
        })),
        textTitleClass: computed(() => ({
          "text-success-darker" : props.variant == "success",
          "text-warning-darker" : props.variant == "warning",
          "text-info-darker" : props.variant == "info",
          "text-danger-darker" : props.variant == "danger"
        })),
        textParagraphClass: computed(() => ({
          "text-success-dark" : props.variant == "success",
          "text-warning-dark" : props.variant == "warning",
          "text-info-dark" : props.variant == "info",
          "text-danger-dark" : props.variant == "danger"
        })),
        iconClass: computed(() => ({
          "text-success-light" : props.variant == "success",
          "text-warning-light" : props.variant == "warning",
          "text-info-light" : props.variant == "info",
          "text-danger-light" : props.variant == "danger"
        })),
        buttonClass: computed(() => ({
          "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600" : props.variant == "success",
          "bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600" : props.variant == "warning",
          "bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600 " : props.variant == "info",
          "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600" : props.variant == "danger"
        }))
      };
    },
  };
</script>

<template>
  <div class="rounded-md p-4" :class="backgroundClass">
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon v-if="variant == 'success'" class="h-5 w-5" :class="iconClass" aria-hidden="true" />
        <XCircleIcon v-if="variant == 'danger'" class="h-5 w-5" :class="iconClass" aria-hidden="true" />
        <InformationCircleIcon v-if="variant == 'info'" class="h-5 w-5" :class="iconClass" aria-hidden="true" />
        <ExclamationTriangleIcon v-if="variant == 'warning'" class="h-5 w-5" :class="iconClass" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 v-if="title" class="text-sm font-medium" :class="textTitleClass">{{ title }}</h3>
        <div v-if="description" class="mt-2 text-sm" :class="textParagraphClass">
          <p>{{ description }}</p>
        </div>
      </div>
      <div v-if="withCloseButton" class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <!-- Use button module here -->
          <button
            type="button"
            class="
              inline-flex
              rounded-md
              p-1.5
              cursor-pointer
              transition-all
              duration-200
              ease-linear
              focus:outline-none
              focus:ring-2 focus:ring-offset-2
            "
            :class="buttonClass"
            @click.prevent="onClick"
          >
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
