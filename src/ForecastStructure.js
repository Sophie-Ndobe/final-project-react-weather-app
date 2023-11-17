import React from "react";
import "./ForecastStructure.css";
import Icon from "./Icon";

export default function ForecastStructure(props) {
  function formatDay() {
    let date = new Date(1000 * props.data.time);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let maximum = Math.round(props.data.temperature.maximum);

    return maximum;
  }

  function minTemperature() {
    let minimum = Math.round(props.data.temperature.minimum);

    return minimum;
  }

  return (
    <div className="ForecastStructure">
      
        <div
          className="mb-3
      "
        >
          {formatDay()}
        </div>

        <Icon iconName={props.data.condition.icon} size={40} />
        <div className="mt-2">
          <span className="me-1">{maxTemperature()}°</span>
          <span className="ms-1">{minTemperature()}°</span>
        </div>
      
    </div>
  );
}
