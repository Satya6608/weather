// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Chart from './components/Chart';

const API_KEY = 'fa69baca7aef5114921b2244d5a146e5';
const CITY_NAME = 'delhi';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
      );
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      {weatherData && (
        <React.Fragment>
          <WeatherCard weatherData={weatherData} />
          <Chart chartData={weatherData} />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
