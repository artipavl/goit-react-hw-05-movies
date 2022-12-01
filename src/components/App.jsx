import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getTrending } from '../Api/Api';
export function App() {
  // useEffect(() => {
  //   getTrending();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </div>
  );
}
