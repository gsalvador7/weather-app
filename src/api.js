import axios from 'axios';

export default async function getWeather(cityName) {
  const apiKey = process.env.REACT_APP_API_KEY;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${apiKey}`;

  let response = await axios.get(url);
  return response.data;
}
