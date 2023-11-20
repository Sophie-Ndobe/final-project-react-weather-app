import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast"
import Footer from "./Footer";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function fetchWeatherData(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function apiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(fetchWeatherData);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <div className="row">
          <div className="col-5">
            <h1>{weather.city}</h1>
          </div>
          <div className="col-7 padding">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    onChange={updateCity}
                  />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary w-100">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Weather data={weather} />
        <Forecast city={weather.city} />
        <Footer />
      </div>
    );
  } else {
    apiCall();
    return <p>Loading....</p>;
  }
}
