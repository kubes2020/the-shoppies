import React from "react";
import { connect } from "react-redux";
import { deleteNomination } from "../actions/index.js";
import "../styles/Nominations.css";

function Nominations(props) {
  // Delete nomination object from nominations array, based on title
  const handleRemove = (title) => {
    props.deleteNomination(title);
  };

  // Map through nominations, when length === 5 display "Hooray"
  return (
    <>
      <h2 className="sub-title">Nominations</h2>
      <div className="nom-box">
        {props.nominations.map((item, index) => {
          return (
            <div className="nom-card">
              <div key={index}>
                {index + 1}: {item.title}, {item.year}
              </div>
              <button onClick={() => handleRemove(item.title)}>Remove</button>
            </div>
          );
        })}
        {props.nominations.length === 5 ? (
          <h3>Hooray!!! You've done it</h3>
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    nominations: state.nominations,
  };
};
export default connect(mapStateToProps, { deleteNomination })(Nominations);
