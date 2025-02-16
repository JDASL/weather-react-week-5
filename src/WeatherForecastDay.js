import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    const date = new date(props.data.dt * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">(day[0])</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">
          {Math.round(props.data.temp.max)}º
        </span>
        <span className="WeatherForecast-temp-min">
          {Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
