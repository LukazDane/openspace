import React from "react";
import OpenSpace from "../OpenSpace/OpenSpace";
import "./OpenSpaceList.css";
import data from "../../sfpopos-data.js";
import { useState } from "react";

function OpenSpaceList() {
  const [query, setQuery] = useState("");
  const spaces = data
    .filter((obj) => {
      // true if query is in title
      const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
      // true if query is in address
      const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
      // return true if either is true
      return inTitle || inAddress;
    })
    .map(({ id, title, address, images, hours }) => {
      // const spaces = data.map(({ title, address, images, hours }, i) => {
      return (
        <div className="OpenSpaceList">
          <OpenSpace
            id={id}
            key={`${title}-${id}`}
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
          />
        </div>
      );
    });

  return (
    <div className="OpenSpaceList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
}
export default OpenSpaceList;
