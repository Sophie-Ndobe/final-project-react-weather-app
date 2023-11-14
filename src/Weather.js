import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h2>19</h2>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Saturday 17:44, overcast clouds</li>
            <li>
              Humidity: <strong>70%</strong>, Wind: <strong>3.6km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
