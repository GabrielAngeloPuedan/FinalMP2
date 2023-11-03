import React, { useState, useEffect } from 'react';

import {
  HomeHeroSection,
  GeneralNews,
  TopStories,
  FeaturedNews,
  NewsItems4,
} from '../components';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [category] = useState('general');

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=64153f05e7c049d6ba06e84b92d12f92`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <main>
      <HomeHeroSection />
      <GeneralNews items={items} />
      <TopStories />
      <FeaturedNews />
      <NewsItems4 />
    </main>
  );
};
