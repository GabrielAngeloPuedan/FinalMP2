import React, { useState, useEffect } from 'react';

export const WNLatestNews = () => {
  const [value, setValue] = useState([]);

  const api = async () => {
    try {
      let response = await fetch(
        'https://newsapi.org/v2/everything?q=world&apiKey=64153f05e7c049d6ba06e84b92d12f92'
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
    <div>
      <div className="flex-shrink max-w-full w-full px-3 pb-5">
        {value.slice(0, 1).map((a, key) => (
          <div
            className="relative hover-img max-h-98 overflow-hidden"
            key={key}
          >
            <a href={a.url}>
              <img
                className="max-w-full w-full mx-auto h-auto"
                src={a.urlToImage}
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
    </div>
  );
};
