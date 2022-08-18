import React, {useMemo} from 'react';
import ForecastCard from '../ForecastCard';
import useStore from '../../core/store';
import {Divider, Stack} from '@mui/material';

function Forecast() {
  const forecast = useStore(state => state.forecast);

  const list = useMemo(
    () =>
      forecast.map(item => ({
        date: new Date(item.dt),
        icon: item.weather.icon,
        minTemp: item.temp.min,
        maxTemp: item.temp.max,
      })),
    [forecast],
  );

  return (
    <Stack
      divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      justifyContent="space-between"
    >
      {list.map((item, index) => (
        <ForecastCard
          key={index}
          date={item.date}
          icon={item.icon}
          minTemp={item.minTemp}
          maxTemp={item.maxTemp}
        />
      ))}
    </Stack>
  );
}

export default Forecast;
