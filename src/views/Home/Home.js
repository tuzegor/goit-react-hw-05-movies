import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList';
import { fetchTrendingMovies } from '../../services/movies-api';
import { IDLE, PENDING, RESOLVED, REJECTED } from '../../services/stateMachine';
import { Loader } from '../../components/Loader';

export function Home() {
  const [films, setFilms] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchTrendingMovies()
      .then(result => {
        setFilms(result.results);
        setStatus(RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(REJECTED);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Trending today</h1>
      <MoviesList films={films}></MoviesList>
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
    </div>
  );
}
