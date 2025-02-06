import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This weather app was created by
          <a
            href="https://www.instagram.com/yourgurljd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <em>JD Apirinya </em>{" "}
          </a>
          with open-sourced code on
          <a
            href="https://github.com/JDASL/weather-react-week-5.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <em>GitHub</em>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
