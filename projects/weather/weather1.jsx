import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_OPENWEATHERMAP_KEY"; // Replace with your key

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
        return;
      }

      setWeather({
        name: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        condition: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      });
      setError("");
    } catch (err) {
      setError("Error fetching weather data");
      setWeather(null);
      console.error(err);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      <div className="input-group">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          onKeyPress={(e) => e.key === "Enter" && getWeather()}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-result">
          <h2>{weather.name}</h2>
          <img src={weather.icon} alt={weather.condition} />
          <p>Temperature: {weather.temp}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
