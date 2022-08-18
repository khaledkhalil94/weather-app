import {SavedLocation} from './types';

export const LOCAL_STORAGE_NAME = 'weather_app_store';
export const CURRENT_LOCATION_ID = 'current_location';
export const DEFAULT_LOCATION: SavedLocation = {
  id: 'default_location',
  name: 'Lisbon',
  lng: -9.13738217,
  lat: 38.7259284,
};
