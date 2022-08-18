import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import _WeatherStatus from './index';

export default {
  title: 'Components/Weather Status',
  component: _WeatherStatus,
  args: {
    icon: '01d',
    description: 'Clear',
  },
} as ComponentMeta<typeof _WeatherStatus>;

const Template: ComponentStory<typeof _WeatherStatus> = args => <_WeatherStatus {...args} />;
export const WeatherStatus = Template.bind({});
