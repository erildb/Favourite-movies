import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import FavouriteMovies from "./streams/FavouriteMovies";
import TopCharts from "./streams/TopCharts";
import MovieList from "./streams/MovieList";
import MovieInfo from "./streams/MovieInfo";
import Header from "./Header";
import history from "../history";
import "./App.css";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div className="page-container">
          <Header />

          <div className="list-container">
            <Switch>
              <Route path="/" exact component={MovieList} />
              <Route path="/movies/:id" exact component={MovieInfo} />
              <Route path="/favourites" exact component={FavouriteMovies} />
              <Route path="/topcharts" exact component={TopCharts} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
