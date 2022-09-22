import Checkbox from "../../../components/forms/checkbox.vue";

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      type: "string",
    },
    checked: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    value: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    labelText: {
      type: "string",
    },
    labelDescription: {
      type: "string",
    },
    error: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: "checkbox",
  checked: false,
  value: false,
  error: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  name: "checkbox",
  checked: true,
  value: false,
  error: false,
  disabled: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: "checkbox",
  checked: false,
  value: false,
  labelText: "Label",
  error: false,
  disabled: false,
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  name: "checkbox",
  checked: false,
  value: false,
  labelText: "Label",
  labelDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  error: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "checkbox",
  checked: false,
  value: false,
  error: false,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  name: "checkbox",
  checked: false,
  value: false,
  error: true,
  disabled: false,
};
