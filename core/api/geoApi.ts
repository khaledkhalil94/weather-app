import axios from 'axios';
import {Cities, CityCoordinates} from './types';
import {ApiError} from '../definitions/types';

export const getCountryCities = async (country: string) => {
  const response = await axios.get<Cities | ApiError>('/api/geo/cities', {
    params: {
      country,
    },
  });
  return response.data;
};

export const getCityCoordinates = async (country: string, city: string) => {
  const response = await axios.get<CityCoordinates | ApiError>('/api/geo/cities/city', {
    params: {
      city,
      country,
    },
  });
  return response.data;
};
