const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '930655cca892db2ef3f0e529ce7dc3f3';

async function baseFetch(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return baseFetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function fetchSearchMovies(query) {
  return baseFetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&&query=${query}`,
  );
}

export function fetchSearchMoviesById(movieId) {
  return baseFetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}
export function fetchMovieActors(movieId) {
  return baseFetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}
export function fetchMovieReviews(movieId) {
  return baseFetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
