import React from "react";
import "./ForecastStructure.css";

export default function ForecastStructure(props) {
  function formatDay() {
    let date = new Date(1000 * props.data[0].time);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

    return days[day];
  }

  function maxTemperature() {
    let maximum = Math.round(props.data[0].temperature.maximum);

    return maximum;
  }

  function minTemperature() {
    let minimum = Math.round(props.data[0].temperature.minimum);

    return minimum;
  }

  return (
    <div className="ForecastStructure">
      <div>{formatDay()}</div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="weather-icon"
      />
      <div>
        <span className="me-1">{maxTemperature()}°</span>
        <span className="ms-1">{minTemperature()}°</span>
      </div>
    </div>
  );
}
