import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
//----------------------------------------------
import { Home } from './views/Home';
import { MoviesSearch } from './views/MoviesSearch';
//----------------------------------------------
import { Header } from './components/Header';

function App() {
  // fetchTrendingMovies().then(r => console.log(r));
  // fetchSearchMovies('matrix').then(r => console.log(r));
  // fetchSearchMoviesById('634649').then(r => console.log(r));
  // fetchMovieActors('634649').then(r => console.log(r));
  // fetchMovieReviews('634649').then(r => console.log(r));

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MoviesSearch} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
