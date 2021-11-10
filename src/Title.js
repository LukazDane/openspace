import React from 'react'
import './Title.css';
import logo from './logo.svg';



function Title() {
    return (
      <div className="Title">
        <img src={logo} alt="atom" height="100pxvh" />
        <h1>OpenSpace</h1>
      <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
    </div>
    )
  }

  export default Title
