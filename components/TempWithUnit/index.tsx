import React from 'react';
import {Typography, TypographyProps} from '@mui/material';
import useStore from '../../core/store/';
import {Units} from '../../core/definitions/types';

interface Props {
  temp: number;
  fontSize?: TypographyProps['fontSize'];
  variant?: TypographyProps['variant'];
}

const unitMap = {
  [Units.celsius]: '°',
  [Units.kelvin]: 'K',
  [Units.fahrenheit]: 'F',
};

function TempWithUnit(props: Props) {
  const {temp, fontSize, variant} = props;
  const unit = useStore(state => state.unit);

  return (
    <Typography fontSize={fontSize} variant={variant}>
      {Math.round(temp)}
      {unitMap[unit]}
    </Typography>
  );
}

export default TempWithUnit;
