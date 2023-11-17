import React from "react";
import "./Weather.css";
import MainDate from "./MainDate";
import Icon from "./Icon";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4 temperature">
          <div className="d-flex justify-content-center">
            <div className="icon"><Icon iconName={props.data.icon} size={65} /></div>
            
            <h2>{props.data.temperature}</h2>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-8">
          <ul>
            <li className="d-flex justify-content-center">
              <MainDate />, {props.data.description}
            </li>
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
