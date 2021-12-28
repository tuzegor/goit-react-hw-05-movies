import React from 'react';
import { MoviesList } from '../../components/MoviesList';
import { fetchTrendingMovies } from '../../services/movies-api';

export function Home() {
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList fetch={fetchTrendingMovies}></MoviesList>
    </>
  );
}
