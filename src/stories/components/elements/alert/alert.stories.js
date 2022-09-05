import Alert from "../../../../components/elements/alert.vue";

export default {
  title: "Components/Elements/Alert",
  component: Alert,
  argTypes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    type: {
      type: "string",
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
      table: {
        defaultValue: { summary: "button" },
      },
    },
    variant: {
        type: "string",
        control: {
          type: "select",
          options: ["success", "warning", "info", "primary", "danger"],
        },
        table: {
          defaultValue: { summary: "info" },
        },
    },
    // onclose: {
    //     type: "function"
    // }
  },
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<Alert v-bind="args" />',
});

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning Alert",
  description: "I'm here to inform you about something",
  type: "button",
  variant: "warning",
};
