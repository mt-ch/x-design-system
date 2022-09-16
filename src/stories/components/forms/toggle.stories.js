import Toggle from "../../../components/forms/toggle.vue";

export default {
  title: "Components/Forms/Toggle",
  component: Toggle,
  argTypes: {
    checked: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    label: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
};

const Template = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: "",
  description: "",
};

export const Enabled = Template.bind({});
Enabled.args = {
  checked: true,
  label: "",
  description: "",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  checked: false,
  label: "Label",
  description: "",
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  checked: false,
  label: "Label",
  description: "Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.",
};