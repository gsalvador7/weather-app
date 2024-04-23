import {
  DataContainer,
  WeatherImageContainer,
  WeatherLocation,
  WeatherTemp,
  Element,
  Data,
  HumidityPercent,
  Text,
  Wind,
} from './styles';
import cloud_icon from '../assets/cloud.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import clear_icon from '../assets/clear.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

export default function WeatherInfo({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>; // Se não houver, exibe uma mensagem de carregamento
  }
  const { main, name, wind } = weatherData;
  return (
    <>
      <WeatherImageContainer>
        <img src={cloud_icon} alt='Cloud Icon' />
      </WeatherImageContainer>
      <WeatherTemp>{Math.round(main.temp)}°C</WeatherTemp>
      <WeatherLocation>{name}</WeatherLocation>
      <DataContainer>
        <Element>
          <img src={humidity_icon} alt='Humidity Icon' />
          <Data>
            <HumidityPercent>{main.humidity}%</HumidityPercent>
            <Text>Humidity</Text>
          </Data>
        </Element>
        <Element>
          <img src={wind_icon} alt='Wind Icon' />
          <Data>
            <Wind>{Math.round(wind.speed * 3.6)} km/h</Wind>
            <Text>Wind Speed</Text>
          </Data>
        </Element>
      </DataContainer>
    </>
  );
}
