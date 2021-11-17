import React from "react";
// import logo from './logo.svg'
import "./OpenSpace.css";

function OpenSpace(props) {
  const { name, image, address, hours } = props;
  return (
    <div className="OpenSpace">
      <h1>{name}</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="Get silly"
      />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  );
}

export default OpenSpace;
