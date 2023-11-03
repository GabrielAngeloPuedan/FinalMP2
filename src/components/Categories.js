import React, { useState, useEffect } from 'react';
import { C1SportsAndEnt, C2WeatherTrend, C3Business } from '../components';

export const Categories = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://newsapi.org/v2/top-headlines?q=world&apiKey=39ec76a824884acba0f2a0a813657dc3'
      );
      let result = await response.json();
      if (result.articles && result.articles.length > 0) {
        setValue(result.articles);
      } else {
        throw new Error('No articles found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="flex-shrink max-w-full w-full lg:w-1/2">
      <div className="box-one flex flex-row flex-wrap">
        <article className="flex-shrink max-w-full w-full sm:w-1/2">
          {value.slice(0, 1).map((a, key) => (
            <div
              className="relative hover-img max-h-48 overflow-hidden"
              key={key}
            >
              <a href={a.url}>
                <img
                  className="max-w-full w-full mx-auto h-auto"
                  src={a.urlToImage}
                  alt={a.title}
                />
              </a>
              <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                <a href={a.url}>
                  <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                    {a.title}
                  </h2>
                </a>
                <div className="pt-1">
                  <div className="text-gray-100">
                    <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                    World News
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
        <C1SportsAndEnt />
        <C2WeatherTrend />
        <C3Business />
      </div>
    </div>
  );
};
