import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/movies-api';
import styles from './Reviews.module.css';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieReviews(movieId).then(result => setReviews(result.results));
  }, [movieId]);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li className={styles.item} key={review.id}>
              <h3 className={styles.title}>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
