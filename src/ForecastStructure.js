import React from "react";
import "./ForecastStructure.css";

export default function ForecastStructure() {
  return (
    <div className="ForecastStructure">
      <div>Thu</div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="weather-icon"
      />
      <div><span>25°</span><span className="ms-2">11°</span></div>
    </div>
  );
}
