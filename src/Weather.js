import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Please write a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-dark w-100"
            />
          </div>
        </div>
      </form>
      <h1>Oslo</h1>
      <ul>
        <li>Thursday</li>
        <li>21:27</li>
        <li>Partly cloudly</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partyly cloudly"
            className="float-left"
          />
          <span className="temperature">4</span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 80%</li>
            <li>wind: 2 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
