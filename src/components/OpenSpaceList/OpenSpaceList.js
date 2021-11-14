import React from "react";
import OpenSpace from "../OpenSpace/OpenSpace";
import "./OpenSpaceList.css";
import data from "../../sfpopos-data.json";

function OpenSpaceList() {
  const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <div className="OpenSpaceList">
        <OpenSpace
          id={i}
          key={title}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      </div>
    );
  });

  return <div className="OpenSpaceList">{spaces}</div>;
}
export default OpenSpaceList;
