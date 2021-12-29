import React from 'react';
import styles from './MovieDetails.module.css';
export function MovieDetails({ film }) {
  return (
    <div className={styles.Card}>
      <img
        className={styles.Poster}
        src={`https://www.themoviedb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
      />
      <div className={styles.Description}>
        <h2 className={styles.Title}>{film.title ?? film.name}</h2>

        <p>Vote: {film.vote_average}/10</p>
        <h3 className={styles.Overview}>Overview</h3>
        <p>{film.overview}</p>
        <ul className={styles.Genres}>
          Genres
          {film.genres.map(genre => (
            <li className={styles.item} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
