import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import favouritesReducer from "./favouritesReducer";
import movieDetailReducer from "./movieDetailReducer";

export default combineReducers({
  movies: moviesReducer,
  favourites: favouritesReducer,
  selectedMovie: movieDetailReducer,
});
