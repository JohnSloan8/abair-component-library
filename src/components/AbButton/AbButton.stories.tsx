import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AbButton from "./AbButton";
import { AbButtonProps } from "./types";

export default {
  title: "Components/AbButton",
  component: AbButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<AbButtonProps> = (args) => <AbButton {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  label: "Róisín",
  selected: true,
  disabled: false,
  color: "#f00",
};

export const Selectable = Template.bind({});
Selectable.args = { label: "Róisín2", selected: false, disabled: false };

export const Unselectable = Template.bind({});
Unselectable.args = {
  label: "Róisín",
  selected: true,
  disabled: true,
};
