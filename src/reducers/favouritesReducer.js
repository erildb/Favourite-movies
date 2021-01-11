import _ from "lodash";
import {
  REMOVE_MOVIE,
  FETCH_FAVOURITE_MOVIES,
  ADD_MOVIE,
} from "../actions/types";

const favouritesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FAVOURITE_MOVIES:
      return { ...state };
    case ADD_MOVIE:
      return { ...state, [action.payload.id]: action.payload };
    case REMOVE_MOVIE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default favouritesReducer;
