import TextField from "../../../components/forms/text-field.vue";

export default {
  title: "Components/Forms/TextField",
  component: TextField,
  argTypes: {
    name: {
      type: "string",
    },
    type: {
      type: "string",
    },
    value: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
    labelText: {
      type: "string",
    },
    helperText: {
      type: "string",
    },
    multiline: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
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
  components: { TextField },
  setup() {
    return { args };
  },
  template: '<TextField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  name: "text-field",
  type: "text",
  value: "",
  placeholder: "",
  labelText: "Label",
  multiline: false,
  error: false,
  disabled: false,
};

export const Multiline = Template.bind({});
Multiline.args = {
  name: "text-field",
  type: "text",
  placeholder: "Placeholder text",
  labelText: "Label",
  multiline: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
  name: "text-field",
  type: "text",
  value: "Input with some text value",
  placeholder: "",
  labelText: "Label",
  multiline: false,
  disabled: false,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  name: "text-field",
  type: "text",
  placeholder: "Placeholder text",
  labelText: "Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "text-field",
  type: "text",
  value: "I am disabled",
  labelText: "Label",
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  name: "text-field",
  type: "text",
  placeholder: "Placeholder text",
  labelText: "Label",
  helperText: "Helper text",
};

export const Error = Template.bind({});
Error.args = {
  name: "text-field",
  type: "text",
  value: "Input with some text value",
  placeholder: "Placeholder text",
  labelText: "Label",
  helperText: "Helper error text",
  error: true,
};
