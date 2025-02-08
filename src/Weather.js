import React, { useState } from "react";
import FormatDay from "./FormatDay";
import FormatDate from "./FormatDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log();
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormatDay date={weatherData.date} />
          </li>
          <li>
            <FormatDate date={weatherData.date[0]} />
          </li>
          <li className="text-capitalized">{weatherData.description}</li>
        </ul>
        <div className="row mt-2">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className=""
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">ºC</span>
            </div>
          </div>
          <div className="col-6 mt-3">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading app...";
  }
}
