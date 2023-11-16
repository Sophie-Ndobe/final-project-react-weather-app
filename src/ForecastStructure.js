import React from "react";
import "./ForecastStructure.css";

export default function ForecastStructure(props) {
  console
  let maxTemperature = Math.round(props.data[0].temperature.maximum);
  let minTemperature = Math.round(props.data[0].temperature.minimum);

  return (
    <div className="ForecastStructure mt-5">
      <div className="day">Tue</div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="weather-icon"
      />
      <div className="mt-2 temperature">
        <span>{maxTemperature}°</span> <span className="ms-2">{minTemperature}°</span>
      </div>
    </div>
  );
}
