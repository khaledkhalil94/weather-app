import {ApiError, Forecast, WeatherData} from '../definitions/types';
import axios from 'axios';

export const getWeatherData = async (params: {lat: number; lng: number}) => {
  const {lat, lng} = params;
  const response = await axios.get<
    | {
        current: WeatherData;
        forecast: Forecast[];
      }
    | ApiError
  >(`/api/weather/openWeatherMap?lat=${lat}&lon=${lng}&unit=metric`);
  return response.data;
};
