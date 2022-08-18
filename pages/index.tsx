import Head from 'next/head';
import type {NextPage} from 'next';
import {useEffect} from 'react';
import {getCurrentLocation} from '../core/actions';
import useStore from '../core/store/';
import {Box} from '@mui/material';
import WeatherStatus from '../components/WeatherStatus';
import MainTemp from '../components/MainTemp';
import DateAndLocation from '../components/DateAndLocation';
import Forecast from '../components/Forecast';
import SavedLocations from '../components/SavedLocations';
import MainLayoutContainer from '../components/MainLayoutContainer';

const Home: NextPage = () => {
  const {weatherData, forecast} = useStore(state => ({
    weatherData: state.weatherData,
    forecast: state.forecast,
  }));

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <main>
        <MainLayoutContainer>
          <Box p={4}>
            <SavedLocations />
            {weatherData && (
              <Box display="flex" justifyContent="space-evenly" alignItems="center">
                <WeatherStatus
                  icon={weatherData.weather.icon}
                  description={weatherData.weather.description}
                />
                <MainTemp
                  temp={weatherData.main.temp}
                  minTemp={forecast[0].temp.min}
                  maxTemp={forecast[0].temp.max}
                />
                <DateAndLocation
                  location={weatherData.name}
                  humd={weatherData.main.humidity}
                  wind={weatherData.wind.speed}
                />
              </Box>
            )}
            <Box mt={20}>
              <Forecast />
            </Box>
          </Box>
        </MainLayoutContainer>
      </main>
    </div>
  );
};

export default Home;
