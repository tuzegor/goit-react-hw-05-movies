import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './MoviesSearch.module.css';

import { MoviesList } from '../../components/MoviesList';
import { fetchSearchMovies } from '../../services/movies-api';
import { IDLE, PENDING, RESOLVED, REJECTED } from '../../services/stateMachine';
import { Loader } from '../../components/Loader';

export function MoviesSearch() {
  const [searchFilmName, setSearchFilmName] = useState('');
  const [films, setFilms] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);
  const savedSearchQuery = new URLSearchParams(location.search).get('query');

  const searchMoviesByQuery = query => {
    fetchSearchMovies(query)
      .then(result => {
        if (result) {
          setFilms(result.results);
          setStatus(RESOLVED);
          return;
        }
        setError(Error('Something went wrong'));
        setStatus(REJECTED);
      })
      .catch(error => {
        setError(error);
        setStatus(REJECTED);
      });
  };

  useEffect(() => {
    if (savedSearchQuery) searchMoviesByQuery(savedSearchQuery);
  }, []);

  const searchFilmBySubmit = e => {
    e.preventDefault();
    setStatus(PENDING);
    searchMoviesByQuery(searchFilmName);

    history.push({
      ...location,
      search: `query=${searchFilmName}`,
    });
    setSearchFilmName('');
  };

  return (
    <div className="container">
      <h1 className="title">What are you looking for?</h1>
      <form className={styles.searchForm} onSubmit={searchFilmBySubmit}>
        <input
          className={styles.filmInput}
          type="text"
          value={searchFilmName}
          autoComplete="off"
          autoFocus
          placeholder="Enter the movie"
          onChange={e => setSearchFilmName(e.target.value)}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
      {status === RESOLVED && <MoviesList films={films}></MoviesList>}
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
    </div>
  );
}
