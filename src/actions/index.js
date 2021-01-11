import movies from "../apis/movies";
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  REMOVE_MOVIE,
  ADD_MOVIE,
  FETCH_FAVOURITE_MOVIES,
} from "./types";

export const fetchMovies = (name) => async (dispatch) => {
  const response = await movies.get("/auto-complete", {
    params: {
      q: name,
    },
  });

  dispatch({ type: FETCH_MOVIES, payload: response.data.d });
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await movies.get("/get-overview-details", {
    params: {
      tconst: id,
    },
  });

  dispatch({ type: FETCH_MOVIE, payload: response.data });
};

export const fetchFavouriteMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_FAVOURITE_MOVIES });
};

export const addFavouriteMovie = (movie) => (dispatch) => {
  dispatch({ type: ADD_MOVIE, payload: movie });
};

export const removeFavouriteMovie = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_MOVIE, payload: id });
};
