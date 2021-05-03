import React from "react";
import { useState } from "react";
import axios from "axios";

export default function MovieForm() {
  const [movieSearch, setMovieSearch] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setMovieSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${movieSearch}&apikey=5074568e`)
      .then((res) => {
        console.log("this is res.data.Search", res.data.Search);
      })
      .catch((err) => {
        console.log("error from res.data.Search", err);
      });
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
    </div>
  );
}
