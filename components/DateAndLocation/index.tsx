import React, {useRef} from 'react';
import {Box} from '@mui/system';
import {Typography} from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import FormattedDate from '../FormattedDate';

interface Props {
  location: string;
  wind: number;
  humd: number;
}

function Authentication(props: Props) {
  const {location, wind, humd} = props;
  const date = useRef(new Date());

  return (
    <Box textAlign="center">
      <Typography variant="h5">{location}</Typography>
      <Typography variant="h6">
        <FormattedDate date={date.current} />
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
        <Box>
          <AirIcon fontSize="small" />
          <Typography fontSize={14}>{wind}%</Typography>
        </Box>
        <Box ml={2}>
          <WaterIcon fontSize="small" />
          <Typography fontSize={14}>{humd}%</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Authentication;
