import React, { useState, useEffect } from 'react';

export const MostPopular = () => {
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
    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
      <div className="w-full bg-white">
        <div className="mb-6">
          <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold">Most Popular</h2>
          </div>
          <ul className="post-number">
            {value.slice(0, 8).map((a, key) => (
              <li
                className="border-b border-gray-100 hover:bg-gray-50"
                key={key}
              >
                <a
                  className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                  href={a.url}
                >
                  {a.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
