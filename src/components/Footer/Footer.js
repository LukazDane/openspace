import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="wrapper">
        <div className="Footer-Section">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: support@sfpopos.com</li>
            <li>Phone: (555)-123-456</li>
            <li>Address: All over the world.</li>
          </ul>
        </div>
        <div className="Footer-Section">
          <h2>Other Services:</h2>
          <ul>
            <li>Exisiting</li>
            <li>Nature Sounds</li>
            <li>Natural Lighting Specialists</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
