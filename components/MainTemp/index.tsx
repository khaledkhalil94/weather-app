import React, {useCallback} from 'react';
import {Box} from '@mui/system';
import TempWithUnit from '../TempWithUnit';

interface Props {
  temp: number;
  minTemp: number;
  maxTemp: number;
}

function MainTemp(props: Props) {
  const {temp, minTemp, maxTemp} = props;

  const roundTemp = useCallback((temp: number) => Math.round(temp), []);

  return (
    <Box textAlign="center">
      <TempWithUnit temp={roundTemp(temp)} variant="h1" />
      <Box display="flex" justifyContent="center" alignItems="center" fontSize={28}>
        <TempWithUnit temp={roundTemp(maxTemp)} fontSize="inherit" />
        <Box px={1}>/</Box>
        <TempWithUnit temp={roundTemp(minTemp)} fontSize="inherit" />
      </Box>
    </Box>
  );
}

export default MainTemp;
