import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">19º</span>
              <span className="WeatherForecast-temp-min">10º</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "675d141cdb9948699d89fad8a45e3139";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("API Error:", error.response);
        if (error.response) {
          console.error(
            "API Response Error:",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error("API Request Error:", error.request);
        } else {
          console.error("API Error:", error.message);
        }
      });
    return null;
  }
}
