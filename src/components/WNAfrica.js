import React, { useState, useEffect } from 'react';

export const WNAfrica = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        'https://gnews.io/api/v4/top-headlines?country=ng&lang=en&max=10&topic=africa&token=6957b115348065c140274c333476bbc5'
      );
      let result = await response.json();
      if (result.articles && result.articles.length > 0) {
        setArticles(result.articles);
      } else {
        throw new Error('No articles found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 pb-4">
            Around the World
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {articles.slice(0, 6).map((article, index) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4"
              key={index}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={article.image}
                  alt={article.title}
                />
              </a>
              <h3 className="text-lg font-semibold mt-3">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
              </h3>
              <p className="text-gray-600 mt-2">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
