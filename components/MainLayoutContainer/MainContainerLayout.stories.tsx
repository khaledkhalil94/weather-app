import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import _MainLayoutContainer from './index';

export default {
  title: 'Components/Main Container',
  component: _MainLayoutContainer,
} as ComponentMeta<typeof _MainLayoutContainer>;

const Template: ComponentStory<typeof _MainLayoutContainer> = _MainLayoutContainer;
export const MainContainer = Template.bind({});
