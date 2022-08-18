import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Unit from './index';

export default {
  title: 'Components/TempWithUnit',
  component: Unit,
} as ComponentMeta<typeof Unit>;

const Template: ComponentStory<typeof Unit> = args => <Unit {...args} />;
export const TempWithUnit = Template.bind({});
TempWithUnit.args = {
  temp: 24,
};
