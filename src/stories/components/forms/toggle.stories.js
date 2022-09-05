import Toggle from "../../../../components/forms/toggle.vue";

export default {
  title: "Components/Forms/Toggle",
  component: Toggle,
//   argTypes: {
//     label: {
//       type: "string",
//     },
//     variant: {
//       type: "string",
//       description: "Badge color type",
//       control: {
//         type: "select",
//         options: ["primary", "secondary", "light", "dark"],
//       },
//       table: {
//         defaultValue: { summary: "default" },
//       },
//     },
//     size: {
//       control: { type: "select" },
//       options: ["small", "large"],
//       table: {
//         defaultValue: { summary: "default" },
//       },
//     },
//     rounded: {
//       type: "boolean",
//       control: {
//         type: "boolean",
//       },
//       table: {
//         defaultValue: { summary: "false" },
//       },
//     },
//   },
};

const Template = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

// export const Primary = Template.bind({});
// Primary.args = {
//     // label: 'Badge',
//     // variant: 'primary',
//     // size: 'large',
//     // rounded: false,
// };

// export const PrimarySmall = Template.bind({});
// PrimarySmall.args = {
//     label: 'Badge',
//     variant: 'primary',
//     size: 'large',
//     rounded: false,
// };

// export const PrimaryRounded = Template.bind({});
// PrimaryRounded.args = {
//     label: 'Badge',
//     variant: 'primary',
//     size: 'large',
//     rounded: true,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Badge',
//     variant: 'secondary',
//     size: 'large',
//     rounded: false,
// };

// export const Light = Template.bind({});
// Light.args = {
//     label: 'Badge',
//     variant: 'light',
//     size: 'large',
//     rounded: false,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//     label: 'Badge',
//     variant: 'dark',
//     size: 'large',
//     rounded: false,
// };