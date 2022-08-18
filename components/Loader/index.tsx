import React from 'react';
import {Box, CircularProgress, Typography} from '@mui/material';

interface Props {
  isLoading: boolean;
  text?: string;
  children: React.ReactNode;
}

function Loader(props: Props) {
  const {isLoading, children, text} = props;

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '95%',
            alignItems: 'center',
            height: '90%',
            backgroundColor: '#ffffffdb',
            zIndex: 10,
          }}
        >
          <CircularProgress />
          <Box mt={4}>
            <Typography>{text}</Typography>
          </Box>
        </Box>
      )}
      {children}
    </>
  );
}

export default Loader;
