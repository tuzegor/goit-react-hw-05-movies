import { Link } from 'react-router-dom';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

export function MoviesList({ films }) {
  return (
    <ul className={styles.filmsList}>
      {films &&
        films.map(film => (
          <li key={film.id} className={styles.item}>
            <Link to={`/movies/${film.id}`}>{film.title ?? film.name}</Link>
          </li>
        ))}
    </ul>
  );
}

MoviesList.propTypes = {
  films: PropTypes.array,
};
