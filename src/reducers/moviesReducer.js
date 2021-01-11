import _ from "lodash";
import { FETCH_MOVIES } from "../actions/types";

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default moviesReducer;
