import React from "react";
import { connect } from "react-redux";
import "../styles/MovieCard.css";

function MovieCard(props) {
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
              <button className="nominate-button">Nominate</button>
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
export default connect(mapStateToProps, {})(MovieCard);
