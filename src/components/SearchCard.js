import React, { useState, useEffect } from 'react';

export const SearchCard = () => {
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
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 pb-4">More Stories</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {value.slice(0, 6).map((a, key) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            key={key}
          >
            <img
              className="w-full"
              src={a.urlToImage}
              alt=""
            />
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {a.title}
            </a>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"></div>
              <p className="text-gray-700 text-base">{a.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
