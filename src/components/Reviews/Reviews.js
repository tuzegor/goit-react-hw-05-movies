import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-api';
import styles from './Reviews.module.css';
import { IDLE, PENDING, RESOLVED, REJECTED } from '../../services/stateMachine';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(PENDING);
    fetchMovieReviews(movieId)
      .then(result => {
        if (result) {
          setReviews(result.results);
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
    <>
      {status === RESOLVED &&
        (reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li className={styles.item} key={review.id}>
                <h3 className={styles.title}>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1>Not found any reviews</h1>
        ))}
      {status === REJECTED && <h1>{error.message}</h1>}
    </>
  );
}
