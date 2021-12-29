import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from '../../services/movies-api';
import styles from './Cast.module.css';

export function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    fetchMovieActors(movieId).then(result => setActors(result.cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={styles.list}>
          {actors.slice(0, 12).map(actor => (
            <li className={styles.item} key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
