import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

export function MoviesList({ films }) {
  const location = useLocation();
  return (
    <ul className={styles.filmsList}>
      {films &&
        films.map(film => (
          <li key={film.id} className={styles.item}>
            <Link
              to={{ pathname: `/movies/${film.id}`, state: { from: location } }}
            >
              {film.title ?? film.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}

MoviesList.propTypes = {
  films: PropTypes.array,
};
