import React from 'react';
import {Typography} from '@mui/material';

interface Props {
  date: Date;
}

function FormattedDate(props: Props) {
  const {date} = props;

  return (
    <Typography>
      {date.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
      })}
    </Typography>
  );
}

export default FormattedDate;
