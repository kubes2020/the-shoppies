import axios from "axios";
export const FETCH_MOVIE_START = "FETCH_MOVIE_START";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";
export const SAVE_NOMINATION = "SAVE_NOMINATION";
export const DELETE_NOMINATION = "DELETE_NOMINATION";

/* Based on user search, action fetches movie objects from OMDb api */
export const fetchMovies = (url) => (dispatch) => {
  dispatch({ type: FETCH_MOVIE_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_MOVIE_SUCCESS, payload: res.data.Search });
    })
    .catch((err) => {
      dispatch({ type: FETCH_MOVIE_FAILURE, payload: err });
    });
};

/* User saves a movie object to nominations array */
export const saveNomination = (obj) => (dispatch) => {
  dispatch({ type: SAVE_NOMINATION, payload: obj });
};

/* User deletes movie object from nominations array, based on title */
export const deleteNomination = (title) => (dispatch) => {
  dispatch({ type: DELETE_NOMINATION, payload: title });
};
