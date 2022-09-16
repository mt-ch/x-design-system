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
    variant: {
      type: "string",
      control: {
        type: "select",
        options: ["success", "warning", "info", "danger"],
      },
      table: {
        defaultValue: { summary: "info" },
      },
    },
    withCloseButton: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      type: "function",
    },
  },
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<Alert v-bind="args" />',
});

export const Success = Template.bind({});
Success.args = {
  title: "Success Alert",
  description: "I'm here to tell you something good",
  variant: "success",
  withCloseButton: false,
  onClick: null,
};

export const Warning = Template.bind({});
Warning.args = {
  title: "Warning Alert",
  description: "I'm here to warn you about something",
  variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
  title: "Info Alert",
  description: "I'm here to inform you about something",
  variant: "info",
};

export const Danger = Template.bind({});
Danger.args = {
  title: "Danger Alert",
  description: "I'm here to warn you about something dangerous",
  variant: "danger",
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  title: "Warning Alert",
  description: "I'm here to warn you about something",
  variant: "warning",
  withCloseButton: true,
  onClick: null,
};
