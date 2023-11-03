import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchResults = () => {
  const location = useLocation();

  const [articles, setArticles] = useState([]);
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchNews = async () => {
      if (query) {
        try {
          const response = await fetch(
            `https://gnews.io/api/v4/search?q=${query}&token=c80ea808b4443ac718aaced8ba3d08f6`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setArticles(data.articles);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchNews();
  }, [query]);

  return (
    <div className="bg-white py-6">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full overflow-hidden">
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                Search Results for: {query}
              </h2>
            </div>

            <div className="flex flex-row flex-wrap -mx-3">
              {articles.map((article, index) => (
                <div
                  className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
                  key={index}
                >
                  <div className="flex flex-row sm:block hover-img">
                    <a href={article.url}>
                      <img
                        className="max-w-full w-full mx-auto"
                        src={article.image}
                        alt={article.title}
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href={article.url}>{article.title}</a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        {article.description}
                      </p>
                      <a
                        className="text-gray-500"
                        href={article.url}
                      >
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
