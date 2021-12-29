import { useState, useEffect } from 'react';
import styles from './MoviePage.module.css';
import {
  Route,
  NavLink,
  useParams,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import { fetchSearchMoviesById } from '../../services/movies-api';
import { MovieDetails } from '../../components/MovieDetails';
import { Cast } from '../../components/Cast';
import { Reviews } from '../../components/Reviews';

export function MoviePage() {
  const { movieId } = useParams();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetchSearchMoviesById(movieId).then(setFilm);
  }, [movieId]);

  return (
    <div className="container">
      <button className={styles.backBtn} onClick={() => history.goBack()}>
        Back
      </button>
      {film && <MovieDetails film={film}></MovieDetails>}
      <div className={styles.addInfo}>
        <h3 className="title">Additional information</h3>
        <NavLink
          activeClassName={styles.active}
          className={styles.Cast}
          to={`${url}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          className={styles.Reviews}
          to={`${url}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </div>
  );
}
