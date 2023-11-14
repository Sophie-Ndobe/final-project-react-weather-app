import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-6">
          <h1>Pretoria</h1>
        </div>
        <div className="col-6">
          <form>
            <div className="row">
              <div className="col-8">
                <input type="search" placeholder="Enter a city..." />
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
