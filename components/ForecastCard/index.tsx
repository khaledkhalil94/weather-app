import React from 'react';
import {Box} from '@mui/system';
import {WeatherIcon as WeatherIconType} from '../../core/definitions/types';
import WeatherIcon from '../WeatherIcon';
import TempWithUnit from '../TempWithUnit';
import FormattedDate from '../FormattedDate';

interface Props {
  date: Date;
  icon: WeatherIconType;
  minTemp: number;
  maxTemp: number;
}

function ForecastCard(props: Props) {
  const {date, minTemp, maxTemp, icon} = props;

  return (
    <Box sx={{p: 2, textAlign: 'center'}}>
      <FormattedDate date={date} />
      <WeatherIcon icon={icon} />
      <Box display="flex" justifyContent="center" alignItems="center" fontSize={18}>
        <TempWithUnit temp={maxTemp} />
        <Box px={0.5}>/</Box>
        <TempWithUnit temp={minTemp} />
      </Box>
    </Box>
  );
}

export default ForecastCard;
