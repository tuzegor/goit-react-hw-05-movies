import { Link, useRouteMatch } from 'react-router-dom';

export function MoviesList({ films }) {
  const { url } = useRouteMatch();

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
