import { useState, useEffect } from 'react';

export function MoviesList({ fetch }) {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetch().then(result => setFilms(result.results));
  }, [fetch]);

  return (
    <ul>
      {films &&
        films.map(film => <li key={film.id}>{film.title ?? film.name}</li>)}
    </ul>
  );
}
