import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast mt-5">
      <div className="day">Tue</div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="weather-icon"
      />
      <div className="mt-2 temperature">
        <span>23°</span> <span className="ms-2">16°</span>
      </div>
    </div>
  );
}
