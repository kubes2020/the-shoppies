import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import MovieCard from "./MovieCard";
import Nominations from "./Nominations.js";
import Loader from "react-loader-spinner";
import "../styles/MovieForm.css";

function MovieForm(props) {
  const [movieSearch, setMovieSearch] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setMovieSearch(e.target.value);
  };

  // Submit user search to OMDb api
  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchMovies(
      `https://www.omdbapi.com/?s=${movieSearch}&apikey=5074568e`
    );
  };

  return (
    <div>
      <div className="upper-form-container">
        <h2>Find Movies</h2>
        <div className="spinner">
          {props.isLoading ? (
            <Loader
              type="Puff"
              color="rgb(75, 72, 69)"
              height={29}
              width={29}
              timeout={3000}
            ></Loader>
          ) : null}
        </div>
        <form onSubmit={onSubmit} className="form-container">
          <label htmlFor="movie">Movie Title</label>
          <input
            name="movie"
            type="text"
            placeholder="search"
            value={movieSearch}
            onChange={onChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
      <div className="main-container">
        <div className="nominations-container">
          <Nominations></Nominations>
        </div>
        <div className="movie-container">
          <MovieCard></MovieCard>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { fetchMovies })(MovieForm);
