import React from 'react';
import { useState, useEffect } from 'react';
import {
  SearchBar,
  TimeandLoc,
  TempAndDetails,
  WeatherForecast,
} from '../components';
import getFormattedWeatherData from '../WeatherJS/AllWeatherData';

export const WeatherTrend = () => {
  const [query, setQuery] = useState({ q: 'Manila' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
      // const data = await getFormattedWeatherData();
      // console.log(data);
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <SearchBar
        setQuery={setQuery}
        units={units}
        setUnits={setUnits}
      />
      <TimeandLoc weather={weather} />
      <TempAndDetails weather={weather} />

      <WeatherForecast
        title="hourly forecast"
        items={weather.hourly}
      />
      <WeatherForecast
        title="weekly forecast"
        items={weather.daily}
      />
    </div>
  );
};
