import {
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  SAVE_NOMINATION,
  DELETE_NOMINATION,
} from "../actions/index.js";

const initialState = {
  movies: [],
  nominations: [],
  isLoading: false,
  error: "",
};

export const movieReducer = (state = initialState, action) => {
  console.log("from reducer payload:", action.payload);
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
    case SAVE_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };
    case DELETE_NOMINATION:
      return {
        ...state,
        nominations: [
          ...state.nominations.filter(
            (nomination) => nomination.title !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};
