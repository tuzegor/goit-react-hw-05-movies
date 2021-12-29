import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList';
import { fetchTrendingMovies } from '../../services/movies-api';

export function Home() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(result => setFilms(result.results));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Trending today</h1>
      <MoviesList films={films}></MoviesList>
    </div>
  );
}
