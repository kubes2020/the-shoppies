import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieCard(props) {
  return (
    <div>
      {props.moviesSaved.map((mov, index) => {
        return <h3 key={index}>{mov.Title}</h3>;
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

// function MovieCard(props) {
//     return (
//       <div>
//         {props.moviesSaved.map((mov, index) => {
//           return (
//             <Card key={index}>
//               <Card.Body>
//                 <Card.Title>{mov.Title}</Card.Title>
//                 <Card.Text>description here</Card.Text>
//                 <Button>Nominate</Button>
//               </Card.Body>
//             </Card>
//           );
//         })}
//       </div>
//     );
//   }
