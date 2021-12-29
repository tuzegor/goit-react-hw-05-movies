import { useState, useEffect } from 'react';
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
    <>
      <button onClick={() => history.goBack()}>Back</button>
      {film && <MovieDetails film={film}></MovieDetails>}
      <div>
        <h3>Additional information</h3>
        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews`}>Reviews</NavLink>
      </div>
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </>
  );
}
