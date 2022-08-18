import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import MainTemp from './index';

export default {
  title: 'Components/Temperature',
  component: MainTemp,
  args: {
    minTemp: 20,
    maxTemp: 50,
    temp: 35,
  },
} as ComponentMeta<typeof MainTemp>;

const Template: ComponentStory<typeof MainTemp> = args => <MainTemp {...args} />;
export const Temperature = Template.bind({});
