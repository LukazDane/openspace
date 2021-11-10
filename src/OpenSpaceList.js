import React from 'react';
import OpenSpace from './OpenSpace';

function OpenSpaceList() {
    return (
      <div>
        <OpenSpace 
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpeg"/>
        <OpenSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="100-pine.jpg"
      />
      <OpenSpace
        name="101 California Street"
        address="101 California"
        image="101-california.jpeg"
      />
      <OpenSpace
        name="343 Sansome Roof Garden"
        address="343 Sansome St."
        image="343-sansome-roof-garden.jpg"
      />
      <OpenSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
      />
      <OpenSpace
        name="Citigroup Center"
        address="1 Sansome St."
        image="citigroup-center.png"
      />

      </div>
    )
  }

  export default OpenSpaceList
