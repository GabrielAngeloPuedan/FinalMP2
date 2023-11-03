import React from 'react';
import { WiThermometer, WiRaindrop, WiStrongWind } from 'react-icons/wi';
import { iconUrlFromCode } from '../WeatherJS/AllWeatherData';

export const TempAndDetails = ({
  weather: { details, icon, speed, humidity, feels_like },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="w-20"
        />
        <p className="text-5xl"> 34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <WiThermometer
              size={25}
              className="mr-1"
            />
            Feels like:
            <span className="font-medium ml-1">{`${feels_like}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiRaindrop
              size={25}
              className="mr-1"
            />
            Humidity:
            <span className="font-medium ml-1">{`${humidity}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiStrongWind
              size={25}
              className="mr-1"
            />
            Wind Speed:
            <span className="font-medium ml-1">{`${speed} km/h`}</span>
          </div>
        </div>
      </div>
      {/* <SunAndPressure /> */}
    </div>
  );
};
