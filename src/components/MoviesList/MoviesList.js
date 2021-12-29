import { Link } from 'react-router-dom';

export function MoviesList({ films }) {
  return (
    <ul>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title ?? film.name}</Link>
          </li>
        ))}
    </ul>
  );
}
