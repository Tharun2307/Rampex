import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Comp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=18dcebc5a9e399f78818907511424fd9`
      )
      .then((res) => setWeather(res.data));
  };

  return (
    <div className="container">
      <h2>🌤️Weather App</h2>

      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && (
        <div className="report">
          <h3>{weather.name}</h3>
          <p> Temperature: {weather.main.temp} °C</p>
         
          <p> Humidity: {weather.main.humidity}%</p>
          <p> Weather: {weather.weather[0].description}</p>
          <p> Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Comp;