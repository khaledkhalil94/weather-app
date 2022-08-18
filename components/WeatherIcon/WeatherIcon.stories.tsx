import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import _WeatherIcon from './index';

export default {
  title: 'Components/WeatherIcon',
  component: _WeatherIcon,
} as ComponentMeta<typeof _WeatherIcon>;

const Template: ComponentStory<typeof _WeatherIcon> = args => <_WeatherIcon {...args} />;
export const WeatherIcon = Template.bind({});
WeatherIcon.args = {
  icon: '02n',
};
