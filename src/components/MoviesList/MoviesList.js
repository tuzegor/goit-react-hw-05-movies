import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export function MoviesList({ fetch }) {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetch().then(result => setFilms(result.results));
  }, [fetch]);

  const { url } = useRouteMatch();
  console.log(url);
  return (
    <ul>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link to={`${url}movies/${film.id}`}>
              {film.title ?? film.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
