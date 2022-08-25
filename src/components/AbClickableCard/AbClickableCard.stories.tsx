import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AbClickableCard from "./AbClickableCard";
import { AbClickableCardProps } from "./types";

export default {
  title: "Components/AbClickableCard",
  component: AbClickableCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the ClickableCard component
const Template: Story<AbClickableCardProps> = (args) => (
  <AbClickableCard {...args} />
);

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Main.args = {
  title: "Speech Synthesis",
  description: "Listen to our voices in the 3 main Irish dialects",
  variation: "main",
};

export const App = Template.bind({});
App.args = {
  title: "Speech Recognition",
  description: "Speak in Irish and see your words as text",
  variation: "app",
};

export const SCApp = Template.bind({});
SCApp.args = {
  title: "Speech Recognition",
  description: "Speak in Irish and see your words as text",
  variation: "sCapp",
};
