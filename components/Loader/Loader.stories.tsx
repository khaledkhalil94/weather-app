import {ComponentStory, ComponentMeta} from '@storybook/react';
import _Loader from './index';

export default {
  title: 'Components/Loader',
  component: _Loader,
} as ComponentMeta<typeof _Loader>;

const Template: ComponentStory<typeof _Loader> = _Loader;
export const Loader = Template.bind({});
Loader.args = {
  text: 'Loading...',
  isLoading: true,
};
