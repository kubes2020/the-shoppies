import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../actions/index.js";

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
