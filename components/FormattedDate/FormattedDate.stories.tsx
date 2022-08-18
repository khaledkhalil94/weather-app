import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import _FormattedDate from './index';

export default {
  title: 'Components/FormattedDate',
  component: _FormattedDate,
  args: {
    date: new Date(),
  },
  argTypes: {
    date: {
      name: 'Date',
      defaultValue: new Date(),
      control: {
        type: 'date',
      },
    },
  },
} as ComponentMeta<typeof _FormattedDate>;

const Template: ComponentStory<typeof _FormattedDate> = args => (
  <_FormattedDate {...args} date={new Date(args.date)} />
);
export const FormattedDate = Template.bind({});
