import React from 'react';

export function MovieDetails({ film }) {
  console.log(film);
  return (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
        width={200}
      />
      <div>
        <h2>{film.title ?? film.name}</h2>

        <p>Vote: {film.vote_average}/10</p>
        <h3>Overview</h3>
        <p>{film.overview}</p>
        <ul>Genres</ul>
        {film.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </div>
    </div>
  );
}
