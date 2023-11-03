import React, { useState, useEffect } from 'react';

export const C1SportsAndEnt = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=any&max=10&apikey=6957b115348065c140274c333476bbc5'
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
    <article className="flex-shrink max-w-full w-full sm:w-1/2">
      {value.slice(0, 1).map((a, key) => (
        <div
          className="relative hover-img max-h-48 overflow-hidden"
          key={key}
        >
          <a href={a.title}>
            <img
              className="max-w-full w-full mx-auto h-auto"
              src={a.image}
              alt={a.title}
            />
          </a>
          <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
            <a href={a.title}>
              <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                {a.title}
              </h2>
            </a>
            <div className="pt-1">
              <div className="text-gray-100">
                <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                Sports and Entertainment
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};
