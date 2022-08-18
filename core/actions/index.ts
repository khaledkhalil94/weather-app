import store, {
  addLocation,
  setActiveLocation,
  setForecast,
  setWeatherData,
  removeLocation as removeLocationFromStore,
  setIsLoading,
  setCurrentLocationStatus,
} from '../store';
import {LocationId, SavedLocation, TempLocation} from '../definitions/types';
import {CURRENT_LOCATION_ID, DEFAULT_LOCATION} from '../definitions/constants';
import {getWeatherData} from '../api';
import {enqueueSnackbar} from 'notistack';

const generateLocationId = (): LocationId => String(Math.round(Math.random() * 1000000));
const LOCATION_TIMEOUT = 5 * 1000;

const handleCurrentLocationSuccess = (position: GeolocationPosition) => {
  const currentLocation = {
    id: CURRENT_LOCATION_ID,
    lat: position.coords.latitude,
    lng: position.coords.longitude,
    name: 'Current Location',
  };
  switchLocation(currentLocation);
  setCurrentLocationStatus('SUCCESS');
};

const handleCurrentLocationError = () => {
  enqueueSnackbar("Couldn't get current position!", {
    variant: 'warning',
    preventDuplicate: true,
  });
  switchLocation(DEFAULT_LOCATION);
  setCurrentLocationStatus('FAIL');
};

export const getCurrentLocation = () => {
  setCurrentLocationStatus('LOADING');
  navigator.geolocation.getCurrentPosition(
    handleCurrentLocationSuccess,
    handleCurrentLocationError,
    {
      timeout: LOCATION_TIMEOUT,
    },
  );
};

export const switchLocation = (location: SavedLocation) => {
  const {activeLocation, weatherData} = store.getState();
  if (activeLocation?.id !== location.id || !weatherData) {
    setActiveLocation(location);
    getLocationWeatherData();
  }
};

export const addNewLocation = (location: TempLocation) => {
  const locationId = generateLocationId();
  const locationWithId = {...location, id: locationId};
  addLocation(locationWithId);
  switchLocation(locationWithId);
  enqueueSnackbar(`Added new location: ${location.name}`, {
    variant: 'success',
    preventDuplicate: true,
  });
};

export const removeLocation = (locationId: LocationId) => {
  const {activeLocation} = store.getState();
  removeLocationFromStore(locationId);
  if (activeLocation?.id === locationId) {
    setActiveLocation(null);
    getLocationWeatherData();
  }
  enqueueSnackbar('Location removed', {
    variant: 'success',
    preventDuplicate: true,
  });
};

export const getLocationWeatherData = async () => {
  setIsLoading(true);
  const activeLocation = store.getState().activeLocation || DEFAULT_LOCATION;
  try {
    const response = await getWeatherData({
      lat: activeLocation.lat,
      lng: activeLocation.lng,
    });
    // Narrowing down the response
    if ('error' in response) {
      enqueueSnackbar(response.message, {
        variant: 'error',
      });
    } else if ('current' in response) {
      setWeatherData(response.current);
      setForecast(response.forecast);
      enqueueSnackbar(`Displaying weather data for ${activeLocation.name}`, {
        variant: 'info',
        preventDuplicate: true,
      });
    }
  } catch (error) {
    enqueueSnackbar('Unknown error!', {
      variant: 'error',
    });
  } finally {
    setIsLoading(false);
  }
};
