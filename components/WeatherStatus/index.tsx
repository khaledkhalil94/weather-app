import React from 'react';
import {Box} from '@mui/system';
import {Typography} from '@mui/material';
import {WeatherIcon as WeatherIconType} from '../../core/definitions/types';
import WeatherIcon from '../WeatherIcon';

interface Props {
  icon: WeatherIconType;
  description: string;
}

function WeatherStatus(props: Props) {
  const {icon, description} = props;

  return (
    <Box textAlign="center">
      <WeatherIcon icon={icon} />
      <Typography textTransform="capitalize">{description}</Typography>
    </Box>
  );
}

export default WeatherStatus;
