import Avatar from "../../../../components/elements/avatar.vue";

export default {
  title: "Components/Elements/Avatar",
  component: Avatar,
  argTypes: {
    image: {
      type: "string",
      description: "Image Url",
    },
    initals: {
      type: "string",
      description: "Users name initals",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    rounded: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const Circular = Template.bind({});
Circular.args = {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    size: 'medium',
    rounded: true
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    size: 'medium',
    rounded: true
};

export const Initals = Template.bind({});
Initals.args = {
    initals: "JB",
    size: 'medium',
    rounded: true
};