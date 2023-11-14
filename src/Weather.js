import React from "react";
import "./Weather.css";
import MainDate from "./MainDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6 temperature">
          <div className="d-flex justify-content-center">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="icon"
              width="100"
            />
            <h2>{props.data.temperature}</h2>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="d-flex justify-content-center"><MainDate />, {props.data.description}</li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
