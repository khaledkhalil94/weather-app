import React from 'react';
import {Container, Box, Paper} from '@mui/material';
import Loader from '../Loader';
import useStore from '../../core/store';

interface Props {
  children: React.ReactNode;
}

function MainLayoutContainer(props: Props) {
  const {children} = props;
  const {isLoadingWeatherData, currentLocationStatus} = useStore(state => ({
    isLoadingWeatherData: state.isLoadingWeatherData,
    currentLocationStatus: state.currentLocationStatus,
  }));

  const isLoadingCurrentLocation = currentLocationStatus === 'LOADING';
  const isLoading = isLoadingWeatherData || isLoadingCurrentLocation;
  const text = isLoadingWeatherData
    ? 'Loading weather data...'
    : isLoadingCurrentLocation
    ? 'Getting current position...'
    : undefined;

  return (
    <Box sx={{height: '100vh', bgcolor: 'whitesmoke'}} pt={10}>
      <Container maxWidth="lg" sx={{sm: {pt: 2, p: 3.25}}} disableGutters>
        <Paper>
          <Box p={4} position="relative">
            <Loader isLoading={isLoading} text={text}>
              {children}
            </Loader>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default MainLayoutContainer;
