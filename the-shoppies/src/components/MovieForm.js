import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import MovieCard from "./MovieCard";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieForm(props) {
  const [movieSearch, setMovieSearch] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
        <button disabled={buttonDisabled}>Submit</button>
      </form>
      <MovieCard></MovieCard>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     moviesSaved: state.movies,
//   };
// };
export default connect("", { fetchMovies })(MovieForm);
