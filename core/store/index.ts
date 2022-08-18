import create from 'zustand';
import {persist} from 'zustand/middleware';
import {LocationId, SavedLocation, Store, Units, Forecast, WeatherData} from '../definitions/types';
import {LOCAL_STORAGE_NAME} from '../definitions/constants';

const initialState: Store = {
  savedLocations: [],
  appId: null,
  activeLocation: null,
  isLoadingWeatherData: false,
  currentLocationStatus: null,
  weatherData: null,
  unit: Units.celsius,
  forecast: [],
};

const store = create<Store>()(
  persist(() => initialState, {
    name: LOCAL_STORAGE_NAME,
    partialize: state => ({
      savedLocations: state.savedLocations,
      activeLocation: state.activeLocation,
    }),
  }),
);

export const setActiveLocation = (location: SavedLocation | null) => {
  store.setState({
    activeLocation: location,
  });
};

export const addLocation = (location: SavedLocation) => {
  store.setState(state => ({
    savedLocations: [...state.savedLocations, location],
  }));
};

export const removeLocation = (id: LocationId) => {
  store.setState(state => ({
    savedLocations: state.savedLocations.filter(location => location.id !== id),
  }));
};

export const setIsLoading = (status: boolean) => {
  store.setState({
    isLoadingWeatherData: status,
  });
};

export const setWeatherData = (data: WeatherData) => {
  store.setState({
    weatherData: data,
  });
};

export const setForecast = (forecast: Forecast[]) => {
  store.setState({
    forecast,
  });
};

export const setCurrentLocationStatus = (status: Store['currentLocationStatus']) => {
  store.setState({
    currentLocationStatus: status,
  });
};

export default store;
