import React from "react";
import { useParams } from "react-router";
import data from "../../sfpopos-data.js";
import "./OpenSpaceDetails.css";
import OpenSpaceFeatureList from "../OpenSpaceFeatureList/OpenSpaceFeatureList.js";

function OpenSpaceDetails(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div className="OpenSpaceDetails">
      <div className="OpenSpaceDetails-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/${images[0]}`}
          alt={title}
        />
      </div>

      <div className="OpenSpaceDetails-info">
        <h1 className="OpenSpaceDetails-title">{title}</h1>
        <p className="OpenSpaceDetails-desc">{desc}</p>
        <p className="OpenSpaceDetails-hours">{hours}</p>
        <OpenSpaceFeatureList features={features} />
        <p className="OpenSpaceDetails-geo">
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default OpenSpaceDetails;
