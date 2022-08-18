export type LocationId = string;

export interface SavedLocation {
  id: LocationId;
  lat: number;
  lng: number;
  name: string;
}
export type TempLocation = Omit<SavedLocation, 'id'>;

export type SavedLocations = Array<SavedLocation>;

export type WeatherIcon =
  | '01d'
  | '02d'
  | '03d'
  | '04d'
  | '09d'
  | '10d'
  | '11d'
  | '13d'
  | '50d'
  | '01n'
  | '02n'
  | '03n'
  | '04n'
  | '09n'
  | '10n'
  | '11n'
  | '13n'
  | '50n';

/**
 * Weather Data interface for currently selected location
 */
export interface WeatherData {
  weather: {
    main: string;
    description: string;
    icon: WeatherIcon;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  id: number;
  name: string;
  cod: number;
}

export interface Forecast {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: WeatherIcon;
  };
  clouds: number;
}

export enum Units {
  celsius = 1,
  kelvin,
  fahrenheit,
}

export interface Store {
  savedLocations: SavedLocations;
  weatherData: WeatherData | null;
  isLoadingWeatherData: boolean;
  activeLocation: SavedLocation | null;
  currentLocationStatus: 'SUCCESS' | 'FAIL' | 'LOADING' | null;
  forecast: Array<Forecast>;
  appId: string | null;
  unit: Units;
}

export interface ApiError {
  // code: number;
  error?: true;
  message: string;
  statusCode: number;
}
