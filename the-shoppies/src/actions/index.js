import React from "react";
import axios from "axios";

export const FETCH_MOVIE_START = "FETCH_MOVIE_START";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchMovies = (url) => (dispatch) => {
  dispatch({ type: FETCH_MOVIE_START });
  axios
    .get(url)
    .then((res) => {
      console.log("res.data.Search from actions", res.data.Search);
      dispatch({ type: FETCH_MOVIE_SUCCESS, payload: res.data.Search });
    })
    .catch((err) => {
      console.log("error from actions", err);
      dispatch({ type: FETCH_MOVIE_FAILURE, payload: err });
    });
};
