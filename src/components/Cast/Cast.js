import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from '../../services/movies-api';

export function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    fetchMovieActors(movieId).then(result => setActors(result.cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul>
          {actors.slice(0, 10).map(actor => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={100}
              />
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
