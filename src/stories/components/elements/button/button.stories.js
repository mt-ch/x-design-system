import Button from "../../../../components/elements/button.vue";

export default {
  title: "Components/Elements/Button",
  component: Button,
  argTypes: {
    label: {
      type: "string",
      description: "Button label",
    },
    variant: {
      type: "string",
      description: "Button color type",
      control: {
        type: "select",
        options: ["primary", "secondary", "light", "dark"],
      },
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    link: {
      type: "string",
      description: "Button URL",
    },
    rounded: {
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
    ariaLabel: {
      type: "string",
      description: "ARIA label. Recommended if your button label isn't descriptive, or if it only contains an icon.",
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Explore',
    variant: 'primary',
    size: 'medium',
    rounded: false,
    disabled: false,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
    label: 'Explore',
    variant: 'primary',
    size: 'medium',
    rounded: true,
    disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Explore',
    variant: 'secondary',
    size: 'medium',
    rounded: false,
    disabled: false,
};

export const Light = Template.bind({});
Light.args = {
    label: 'Explore',
    variant: 'light',
    size: 'medium',
    rounded: false,
    disabled: false,
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Explore',
    variant: 'dark',
    size: 'medium',
    rounded: false,
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Explore',
    variant: 'primary',
    size: 'medium',
    rounded: false,
    disabled: true,
};