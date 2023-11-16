import React, { useState } from "react";
import ForecastStructure from "./ForecastStructure";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function fetchForecastData(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function forecastApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(fetchForecastData);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ForecastStructure data={forecast} />
      </div>
    );
  } else {
    forecastApiCall();
    return <p>Loading forecast....</p>;
  }
}
