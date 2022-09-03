import Avatar from "./avatar.vue";

export default {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    // label: {
    //   type: "string",
    //   description: "Button label",
    // },
    // color: {
    //   type: "string",
    //   description: "Button color type",
    //   control: {
    //     type: "select",
    //     options: ["primary", "secondary", "light", "dark"],
    //   },
    //   table: {
    //     defaultValue: { summary: "default" },
    //   },
    // },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    // link: {
    //   type: "string",
    //   description: "Button URL",
    // },
    circular: {
      type: "boolean",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: { summary: "true" },
      },
    },
    // disabled: {
    //   type: "boolean",
    //   control: {
    //     type: "boolean",
    //   },
    //   table: {
    //     defaultValue: { summary: "false" },
    //   },
    // },
    // ariaLabel: {
    //   type: "string",
    //   description: "ARIA label. Recommended if your button label isn't descriptive, or if it only contains an icon.",
    // },
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
    circular: true
};

export const Placeholder = Template.bind({});
Placeholder.args = {
    size: 'medium',
    circular: true
};


// export const PrimaryRounded = Template.bind({});
// PrimaryRounded.args = {
//     label: 'Explore',
//     color: 'primary',
//     size: 'medium',
//     rounded: true,
//     disabled: false,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Explore',
//     color: 'secondary',
//     size: 'medium',
//     rounded: false,
//     disabled: false,
// };

// export const Light = Template.bind({});
// Light.args = {
//     label: 'Explore',
//     color: 'light',
//     size: 'medium',
//     rounded: false,
//     disabled: false,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//     label: 'Explore',
//     color: 'dark',
//     size: 'medium',
//     rounded: false,
//     disabled: false,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//     label: 'Explore',
//     color: 'primary',
//     size: 'medium',
//     rounded: false,
//     disabled: true,
// };