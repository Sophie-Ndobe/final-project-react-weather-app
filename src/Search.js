import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <div className="row">
        <div className="col-6">
          <h1>Pretoria</h1>
        </div>
        <div className="col-6">
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
                <btn className="btn btn-primary w-100">Search</btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
