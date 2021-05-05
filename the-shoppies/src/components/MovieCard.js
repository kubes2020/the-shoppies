import React from "react";
import { connect } from "react-redux";
import "../styles/MovieCard.css";
import { saveNomination } from "../actions/index.js";

function MovieCard(props) {
  const handleClick = (title, year) => {
    console.log("this is title, year", title, year);
    props.saveNomination({ title: title, year: year });
  };

  return (
    <div className="stack-center">
      {props.moviesSaved.map((mov, index) => {
        return (
          <div className="movie-card" key={index}>
            <div className="movie-image">
              <img src={mov.Poster} alt="movie pic"></img>
            </div>
            <div className="movie-text">
              <div>{mov.Title}</div>
              <div>{mov.Year}</div>
              <button
                className="nominate-button"
                onClick={() => handleClick(mov.Title, mov.Year)}
              >
                Nominate
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    moviesSaved: state.movies,
  };
};
export default connect(mapStateToProps, { saveNomination })(MovieCard);
