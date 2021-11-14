import React from "react";
import "./OpenSpaceFeature.css";

function getFeature(str) {
  switch (str) {
    case "outdoors":
      return "🌲 ";
    case "coffee":
      return "☕️ ";
    case "art":
      return "🖼 ";
    case "toilet":
      return "🚽 ";
    case "power":
      return "🔌 ";
    default:
      return "？";
  }
}

function OpenSpaceFeature(props) {
  const emoji = getFeature(props.name);
  return <div className="OpenSpaceFeature">{emoji}</div>;
}

export default OpenSpaceFeature;
