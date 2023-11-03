import React from 'react';
import {
  WNHeroSection,
  EuropeNews,
  WNFeatured,
  WNAfrica,
  WNMoreTopStories,
} from '../components';

export const WorldNews = () => {
  return (
    <div>
      <WNHeroSection />
      <EuropeNews />
      <WNFeatured />
      <WNAfrica />
      <WNMoreTopStories />
    </div>
  );
};
