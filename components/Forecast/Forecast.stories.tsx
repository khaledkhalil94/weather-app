import {ComponentStory, ComponentMeta} from '@storybook/react';
import _Forecast from './index';
import useStore from '../../core/store';

useStore.setState({
  forecast: [
    {
      dt: Date.now(),
      temp: {
        min: 10,
        max: 30,
      },
      weather: {
        icon: '04d',
        description: 'Clear Sky',
        main: 'Clear',
        id: 2,
      },
      clouds: 20,
      humidity: 80,
      wind_deg: 20,
      wind_gust: 10,
      wind_speed: 20,
    },
  ],
});

export default {
  title: 'Components/Forecast',
  component: _Forecast,
} as ComponentMeta<typeof _Forecast>;

const Template: ComponentStory<typeof _Forecast> = _Forecast;
export const Forecast = Template.bind({});
