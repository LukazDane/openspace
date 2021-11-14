import React from "react";
import OpenSpaceFeature from "../OpenSpaceFeature/OpenSpaceFeature";
import "./OpenSpaceFeatureList.css";

function OpenSpaceFeatureList(props) {
  const icons = props.features.map((feature) => {
    return <OpenSpaceFeature key={feature} name={feature} />;
  });
  return <div className="OpenSpaceFeatureList">{icons}</div>;
}

export default OpenSpaceFeatureList;
