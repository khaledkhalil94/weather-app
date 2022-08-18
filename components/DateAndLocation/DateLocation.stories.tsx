import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import _DateLocation from './index';

export default {
  title: 'Components/DateLocation',
  component: _DateLocation,
} as ComponentMeta<typeof _DateLocation>;

const Template: ComponentStory<typeof _DateLocation> = args => <_DateLocation {...args} />;
export const DateLocation = Template.bind({});
DateLocation.args = {
  location: 'Lisbon, Portugal',
  humd: 60,
  wind: 20,
};
