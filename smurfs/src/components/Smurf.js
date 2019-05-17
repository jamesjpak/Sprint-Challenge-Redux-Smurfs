import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3> {props.smurf.name} </h3>
      <strong> {props.smurf.age} smurf years old </strong>
      <p> {props.smurf.height} tall </p>
    </div>
  );
};

export default Smurf;
