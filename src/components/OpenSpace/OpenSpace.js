import React from "react";
// import logo from './logo.svg'
import "./OpenSpace.css";
import { Link } from "react-router-dom";

function OpenSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className="OpenSpace">
      <h1>
        <Link className="OpenSpace-title" to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width="300"
          height="300"
          alt="Thoma's skillset is an obvious marker that the game is just going to power creep every character instead of balancing any of them ever."
        />
      </Link>
      <div className="OpenSpace-info">
        <div>{address}</div>
        <div>{hours}</div>
      </div>
    </div>
  );
}

export default OpenSpace;
