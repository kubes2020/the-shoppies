import React from "react";
import { useState } from "react";

export default function MovieForm() {
  const [movieSearch, setMovieSearch] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setMovieSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
