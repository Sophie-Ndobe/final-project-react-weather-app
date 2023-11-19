import React, { useState, useEffect } from "react";
import ForecastStructure from "./ForecastStructure";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function fetchForecastData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function forecastApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(fetchForecastData);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (forecastDays, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastStructure data={forecastDays} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    forecastApiCall();
    return <p>Loading forecast....</p>;
  }
}
