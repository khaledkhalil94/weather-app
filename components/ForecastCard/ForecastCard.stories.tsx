import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import _ForecastCard from './index';

export default {
  title: 'Components/ForecastCard',
  component: _ForecastCard,
  args: {
    icon: '01n',
    temperature: 23,
    date: new Date(),
    isActive: false,
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
} as ComponentMeta<typeof _ForecastCard>;

const Template: ComponentStory<typeof _ForecastCard> = args => (
  <_ForecastCard {...args} date={new Date(args.date)} />
);
export const ForecastCard = Template.bind({});
ForecastCard.args = {
  minTemp: 15,
  maxTemp: 30,
};
