import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import OpenSpaceList from "./components/OpenSpaceList/OpenSpaceList";
import OpenSpaceDetails from "./components/OpenSpaceDetails/OpenSpaceDetails";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<OpenSpaceList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<OpenSpaceDetails />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
