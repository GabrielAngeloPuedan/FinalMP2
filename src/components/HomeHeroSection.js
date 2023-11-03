import React, { useState, useEffect } from 'react';
import { Categories } from './Categories';

export const HomeHeroSection = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://gnews.io/api/v4/top-headlines?category=general &lang=en&country=any&max=10&apikey=6957b115348065c140274c333476bbc5'
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
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <h2 className="text-gray-800 text-2xl font-bold">
          <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
          Headlines
        </h2>
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
            {value.slice(0, 1).map((a, key) => (
              <div
                className="relative hover-img max-h-98 overflow-hidden"
                key={key}
              >
                <a href={a.url}>
                  <img
                    className="max-w-full w-full mx-auto h-auto"
                    src={a.image}
                    alt={a.title}
                  />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href={a.url}>
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">
                      {a.title}
                    </h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">
                    {a.description}
                  </p>
                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Categories />
        </div>
      </div>
    </div>
  );
};
