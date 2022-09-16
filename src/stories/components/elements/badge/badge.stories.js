import Badge from "../../../../components/elements/badge.vue";

export default {
  title: "Components/Elements/Badge",
  component: Badge,
  argTypes: {
    label: {
      type: "string",
    },
    variant: {
      type: "string",
      description: "Badge color type",
      control: {
        type: "select",
        options: ["primary", "secondary", "light", "dark"],
      },
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      table: {
        defaultValue: { summary: "medium" },
      },
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
  },
};

const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Badge',
    variant: 'primary',
    size: 'medium',
    rounded: false,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    label: 'Badge',
    variant: 'primary',
    size: 'large',
    rounded: false,
};

export const PrimaryRounded = Template.bind({});
PrimaryRounded.args = {
    label: 'Badge',
    variant: 'primary',
    size: 'medium',
    rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Badge',
    variant: 'secondary',
    size: 'medium',
    rounded: false,
};

export const Light = Template.bind({});
Light.args = {
    label: 'Badge',
    variant: 'light',
    size: 'medium',
    rounded: false,
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Badge',
    variant: 'dark',
    size: 'medium',
    rounded: false,
};