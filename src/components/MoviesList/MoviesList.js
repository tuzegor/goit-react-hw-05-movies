import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

export default function MoviesList({ films }) {
  const location = useLocation();
  return (
    <ul className={styles.filmsList}>
      {films &&
        films.map(film => (
          <li key={film.id} className={styles.item}>
            <Link
              to={{ pathname: `/movies/${film.id}`, state: { from: location } }}
            >
              <div className={styles.wrapper}>
                <img
                  className={styles.poster}
                  src={
                    film.poster_path
                      ? `https://www.themoviedb.org/t/p/w500${film.poster_path}`
                      : 'https://tl.rulate.ru/i/book/19/10/18925.jpg'
                  }
                  alt={film.title}
                  width={150}
                />
                <h2 className={styles.title}>{film.title ?? film.name}</h2>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}

MoviesList.propTypes = {
  films: PropTypes.array,
};
