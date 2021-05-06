import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import MovieCard from "./MovieCard";
import Nominations from "./Nominations.js";
import "../styles/MovieForm.css";

function MovieForm(props) {
  const [movieSearch, setMovieSearch] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setMovieSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchMovies(
      `http://www.omdbapi.com/?s=${movieSearch}&apikey=5074568e`
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="movie">
          Movie Title
          <input
            name="movie"
            type="text"
            placeholder="search"
            value={movieSearch}
            onChange={onChange}
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <div className="main-container">
        <div className="movie-container">
          <MovieCard></MovieCard>
        </div>
        <div className="nominations-container">
          <Nominations></Nominations>
        </div>
      </div>
    </div>
  );
}

export default connect("", { fetchMovies })(MovieForm);
