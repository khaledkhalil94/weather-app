import axios from 'axios';
import type {NextApiRequest, NextApiResponse} from 'next';
import {ApiError, Forecast, WeatherData} from '../../../core/definitions/types';
import {
  Forecast as ApiForecast,
  Params,
  WeatherData as ApiWeatherData,
} from './openWeatherMap.types';

const baseUrl = 'https://api.openweathermap.org';
const appId = process.env.APP_ID;

interface Response {
  current: WeatherData;
  forecast: Forecast[];
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    units: 'metric',
  },
});

const getWeatherData = async (params: Partial<Params>): Promise<WeatherData> => {
  const response = await axiosInstance.get<ApiWeatherData>(`/data/2.5/weather`, {
    params: {
      ...params,
      appId,
    },
  });
  const {data} = response;
  return {
    ...data,
    weather: data.weather[0],
  };
};

const getForecastData = async (params: Partial<Params>): Promise<Array<Forecast>> => {
  const response = await axiosInstance.get<ApiForecast>(`/data/2.5/onecall`, {
    params: {
      exclude: 'minutely,hourly',
      ...params,
      appId,
    },
  });
  const {data} = response;
  return (
    data.daily
      // Only return upcoming days
      .slice(1, 8)
      // transform timestamp to be in milliseconds
      .map(day => ({...day, dt: day.dt * 1000, weather: day.weather[0]}))
  );
};

export default async function handler(
  req: NextApiRequest,
  result: NextApiResponse<Response | ApiError>,
) {
  try {
    const params = req.query;
    const weatherData = await getWeatherData(params);
    const forecast = await getForecastData(params);
    const response = {
      current: weatherData,
      forecast,
    };
    result.status(200).json(response);
  } catch (error: any) {
    result.status(400).json({
      statusCode: error.response.status,
      message: error.response.data.message,
      error: true,
    });
  }
}
