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
import { IDLE, PENDING, RESOLVED, REJECTED } from '../../services/stateMachine';
import { Loader } from '../../components/Loader';
import PropTypes from 'prop-types';

export function MoviePage() {
  const { movieId } = useParams();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchSearchMoviesById(movieId)
      .then(result => {
        if (result) {
          setFilm(result);
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
  }, [movieId]);

  return (
    <div className="container">
      <button className={styles.backBtn} onClick={() => history.goBack()}>
        Back
      </button>
      {status === RESOLVED && (
        <>
          <MovieDetails film={film}></MovieDetails>
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
        </>
      )}
      {status === PENDING && <Loader />}
      {status === REJECTED && <h1>{error.message}</h1>}
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </div>
  );
}

MoviePage.propTypes = {
  movieId: PropTypes.string,
};
