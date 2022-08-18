import React from 'react';
import {Box} from '@mui/system';
import {WeatherIcon as WeatherIconType} from '../../core/definitions/types';
import Image from 'next/image';

interface Props {
  icon: WeatherIconType;
  width?: number;
  height?: number;
}

function WeatherIcon(props: Props) {
  const {icon, width, height} = props;

  const iconUrl = `/weather_icons/${icon}.png`;

  return (
    <Box>
      <Image
        alt={icon}
        loader={() => iconUrl}
        src={iconUrl}
        width={width || 100}
        height={height || 100}
        layout="fixed"
      />
    </Box>
  );
}

export default WeatherIcon;
