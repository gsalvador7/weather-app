import React, { useState, useEffect } from 'react';
import { Container } from './components/Container/styles';
import TopBar from './components/TopBar';
import WeatherInfo from './components/WeatherInfo';
import getWeather from './api';

const defaultCity = 'London';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (cityName) => {
    const data = await getWeather(cityName);
    setWeatherData(data);
  };

  useEffect(() => {
    handleSearch(defaultCity);
  }, []);

  return (
    <Container>
      <TopBar onSearch={handleSearch} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </Container>
  );
}
