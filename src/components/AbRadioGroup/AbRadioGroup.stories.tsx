import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AbRadioGroup from "./AbRadioGroup";
import { AbRadioGroupProps } from "./types";

export default {
  title: "Components/AbRadioGroup",
  component: AbRadioGroup,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the RadioGroup component
const Template: Story<AbRadioGroupProps> = (args) => <AbRadioGroup {...args} />;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  variation: "large",
};

export const Small = Template.bind({});
Small.args = {
  variation: "small",
};
