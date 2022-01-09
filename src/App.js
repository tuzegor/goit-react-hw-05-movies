import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';
//----------------------------------------------
import Home from './views/Home/Home';
import MoviesSearch from './views/MoviesSearch/MoviesSearch';
import MoviePage from './views/MoviePage/MoviePage';

//----------------------------------------------
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MoviesSearch} />
        <Route path="/movies/:movieId" component={MoviePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
