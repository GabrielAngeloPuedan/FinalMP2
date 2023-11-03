import { Routes, Route } from 'react-router-dom';
import {
  Home,
  SportsAndEntertainment,
  WorldNews,
  WeatherTrend,
  AboutUs,
} from '../pages';
import { SearchPage, SearchResults } from '../components';

// import { WeatherTrends } from '../pages/WeatherPage/WeatherTrends';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="news/WorldNews"
          element={<WorldNews />}
        />
        <Route
          path="news/SportsAndEntertainment"
          element={<SportsAndEntertainment />}
        />
        <Route
          path="news/WeatherTrend"
          element={<WeatherTrend />}
        />
        <Route
          path="/AboutUs"
          element={<AboutUs />}
        />
        <Route
          path="/"
          element={<SearchPage />}
        />
        <Route
          path="/results"
          element={<SearchResults />}
        />
      </Routes>
    </div>
  );
};
