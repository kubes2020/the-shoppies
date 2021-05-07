import React from "react";
import { connect } from "react-redux";
import "../styles/MovieCard.css";
import { saveNomination } from "../actions/index.js";

function MovieCard(props) {
  /* Allow maximum of 5 movie nominations */
  const handleClick = (title, year) => {
    if (props.nominatedMovies.length < 5) {
      props.saveNomination({ title: title, year: year });
    } else {
      alert("So sorry, there is a maximum of 5 nominations");
    }
  };

  /* If moviesSaved has objects, map through them to display */
  const renderCard = () => {
    if (props.moviesSaved) {
      return props.moviesSaved.map((mov, index) => {
        return (
          <div className="movie-card" key={index}>
            <div className="movie-image">
              <img src={mov.Poster} alt="movie pic"></img>
            </div>
            <div className="movie-text">
              <div>{mov.Title}</div>
              <div>{mov.Year}</div>
              {/* Do not display the "nominate button" if title is already in nominatedMovies */}
              {props.nominatedMovies.filter(({ title }) => mov.Title === title)
                .length === 1 ? null : (
                <button
                  className="nominate-button"
                  onClick={() => handleClick(mov.Title, mov.Year)}
                >
                  Nominate
                </button>
              )}
            </div>
          </div>
        );
      });
    } else {
      return (
        <>
          <h3>Well this is embarrassing...</h3>
          <h3>We couldn't find any movies for that search</h3>
        </>
      );
    }
  };

  return (
    <>
      <h2>Search Results</h2>
      <div className="stack-center">
        <div>{renderCard()}</div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    moviesSaved: state.movies,
    nominatedMovies: state.nominations,
  };
};
export default connect(mapStateToProps, { saveNomination })(MovieCard);
