import React from "react";
import FormatDay from "./FormatDay";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDay date={props.data.date} />
        </li>
        <li>
          <FormatDate date={props.data.date[0]} />
        </li>
        <li className="text-capitalized">{props.data.description}</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} size={55} />
            <TemperatureUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
