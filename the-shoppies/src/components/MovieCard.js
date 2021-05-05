import React from "react";
import { connect } from "react-redux";
import "../styles/MovieCard.css";
import { saveNomination } from "../actions/index.js";

function MovieCard(props) {
  const handleClick = (title, year) => {
    console.log("this is title, year", title, year);
    props.saveNomination({ title: title, year: year });
  };

  // let x = [1, 2, 3, 4];

  // const renderCard = () => {
  //   return props.moviesSaved.map((item, index) => {
  //     return <div>{item.Title}</div>;
  //   });
  // };
  let nominatedBool = false;

  const renderCard = () => {
    return props.moviesSaved.map((mov, index) => {
      return (
        <div className="movie-card" key={index}>
          <div className="movie-image">
            <img src={mov.Poster} alt="movie pic"></img>
          </div>
          <div className="movie-text">
            <div>{mov.Title}</div>
            <div>{mov.Year}</div>
            {props.nominatedMovies.forEach((nom) => {
              nominatedBool = nom.title === mov.Title;
            })}
            {nominatedBool ? null : (
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

// return (
//   <>
//     <h2>Search Results</h2>
//     <div className="stack-center">
//       {props.moviesSaved.map((mov, index) => {
//         return (
//           <div className="movie-card" key={index}>
//             <div className="movie-image">
//               <img src={mov.Poster} alt="movie pic"></img>
//             </div>
//             <div className="movie-text">
//               <div>{mov.Title}</div>
//               <div>{mov.Year}</div>
//               {props.nominatedMovies.forEach((nom) => {
//                 console.log("checking bool", nom.title === mov.Title);
//                 let x = nom.title === mov.Title;
//                 return x;
//               })}

//               <button
//                 className="nominate-button"
//                 onClick={() => handleClick(mov.Title, mov.Year)}
//               >
//                 Nominate
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </>
// );
