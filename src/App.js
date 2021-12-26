import './App.css';
import {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchSearchMoviesById,
  fetchMovieActors,
  fetchMovieReviews,
} from './services/movies-api';

function App() {
  fetchTrendingMovies().then(r => console.log(r));
  fetchSearchMovies('matrix').then(r => console.log(r));
  fetchSearchMoviesById('634649').then(r => console.log(r));
  fetchMovieActors('634649').then(r => console.log(r));
  fetchMovieReviews('634649').then(r => console.log(r));

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
