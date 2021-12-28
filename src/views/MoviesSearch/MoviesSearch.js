import { useState } from 'react';

import { MoviesList } from '../../components/MoviesList';
import { fetchSearchMovies } from '../../services/movies-api';

export function MoviesSearch() {
  const [searchFilmName, setSearchFilmName] = useState('');
  const [listState, setListState] = useState(false);
  const [films, setFilms] = useState(null);

  const searchFilmBySubmit = e => {
    e.preventDefault();
    fetchSearchMovies(searchFilmName).then(result => setFilms(result.results));
    setListState(true);
    setSearchFilmName('');
  };

  return (
    <>
      <h1>What are you looking for?</h1>
      <form onSubmit={searchFilmBySubmit}>
        <input
          type="text"
          value={searchFilmName}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setSearchFilmName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {listState && <MoviesList films={films}></MoviesList>}
    </>
  );
}
