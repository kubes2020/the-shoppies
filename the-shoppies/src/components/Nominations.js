import React from "react";
import { connect } from "react-redux";
import { deleteNomination } from "../actions/index.js";

function Nominations(props) {
  const handleRemove = (title) => {
    props.deleteNomination(title);
  };

  return (
    <div>
      <h2>Nominations</h2>
      {props.nominations.map((item, index) => {
        return (
          <>
            <div key={index}>
              {index + 1}: {item.title}, {item.year}
            </div>
            <button onClick={() => handleRemove(item.title)}>Remove</button>
          </>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    nominations: state.nominations,
  };
};
export default connect(mapStateToProps, { deleteNomination })(Nominations);
