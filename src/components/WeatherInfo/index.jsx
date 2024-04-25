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
  WeatherImage,
  CleanDayFrame,
  CleanNightFrame,
  RainyDayFrame,
  RainyNightFrame,
  FewCloudsDayFrame,
  FewCloudsNightFrame,
  ScatteredCloudsDayFrame,
  ScatteredCloudsNightFrame,
  BrokenCloudsDayFrame,
  BrokenCloudsNightFrame,
  ShowerRainDayFrame,
  ShowerRainNightFrame,
  ThunderstormDayFrame,
  ThunderstormNightFrame,
  SnowDayFrame,
  SnowNightFrame,
  MistDayFrame,
  MistNightFrame,
  StatusContainer,
  Status,
  Description,
} from './styles';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.svg';
import sun_icon from '../assets/sun.svg';
import moon_icon from '../assets/moon.svg';
import few_clouds_day_icon from '../assets/few_clouds_day.svg';
import few_clouds_night_icon from '../assets/few_clouds_night.svg';
import scattered_clouds_icon from '../assets/scattered_clouds.svg';
import broken_clouds_icon from '../assets/broken_clouds.svg';
import shower_rain_day_icon from '../assets/shower_rain_day.svg';
import shower_rain_night_icon from '../assets/shower_rain_night.svg';
import rain_day_icon from '../assets/rain_day.svg';
import rain_night_icon from '../assets/rain_night.svg';
import thunderstorm_icon from '../assets/thunderstorm.svg';
import snow_icon from '../assets/snow.svg';
import mist_icon from '../assets/mist.svg';

export default function WeatherInfo({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const { main, name, wind, weather } = weatherData;
  const iconCode = weather[0].icon;
  const description = weather[0].description;

  const getWeatherComponent = (iconCode) => {
    if (iconCode === '01d') {
      return (
        <CleanDayFrame>
          <WeatherImage src={sun_icon} alt='Sun icon' />
        </CleanDayFrame>
      );
    }
    if (iconCode === '01n') {
      return (
        <CleanNightFrame>
          <WeatherImage src={moon_icon} alt='Moon icon' />
        </CleanNightFrame>
      );
    }
    if (iconCode === '02d') {
      return (
        <FewCloudsDayFrame>
          <WeatherImage src={few_clouds_day_icon} alt='Few clouds day icon' />
        </FewCloudsDayFrame>
      );
    }
    if (iconCode === '02n') {
      return (
        <FewCloudsNightFrame>
          <WeatherImage
            src={few_clouds_night_icon}
            alt='Few clouds night icon'
          />
        </FewCloudsNightFrame>
      );
    }
    if (iconCode === '03d') {
      return (
        <ScatteredCloudsDayFrame>
          <WeatherImage
            src={scattered_clouds_icon}
            alt='Scattered clouds icon'
          />
        </ScatteredCloudsDayFrame>
      );
    }
    if (iconCode === '03n') {
      return (
        <ScatteredCloudsNightFrame>
          <WeatherImage
            src={scattered_clouds_icon}
            alt='Scattered clouds icon'
          />
        </ScatteredCloudsNightFrame>
      );
    }
    if (iconCode === '04d') {
      return (
        <BrokenCloudsDayFrame>
          <WeatherImage src={broken_clouds_icon} alt='Broken clouds icon' />
        </BrokenCloudsDayFrame>
      );
    }
    if (iconCode === '04n') {
      return (
        <BrokenCloudsNightFrame>
          <WeatherImage src={broken_clouds_icon} alt='Broken clouds icon' />
        </BrokenCloudsNightFrame>
      );
    }
    if (iconCode === '09d') {
      return (
        <ShowerRainDayFrame>
          <WeatherImage src={shower_rain_day_icon} alt='Shower rain day icon' />
        </ShowerRainDayFrame>
      );
    }
    if (iconCode === '09n') {
      return (
        <ShowerRainNightFrame>
          <WeatherImage
            src={shower_rain_night_icon}
            alt='Shower rain night icon'
          />
        </ShowerRainNightFrame>
      );
    }
    if (iconCode === '10d') {
      return (
        <RainyDayFrame>
          <WeatherImage src={rain_day_icon} alt='Rainy day icon' />
        </RainyDayFrame>
      );
    }
    if (iconCode === '10n') {
      return (
        <RainyNightFrame>
          <WeatherImage src={rain_night_icon} alt='Rainy night icon' />
        </RainyNightFrame>
      );
    }
    if (iconCode === '11d') {
      return (
        <ThunderstormDayFrame>
          <WeatherImage src={thunderstorm_icon} alt='Thunderstorm icon' />
        </ThunderstormDayFrame>
      );
    }
    if (iconCode === '11n') {
      return (
        <ThunderstormNightFrame>
          <WeatherImage src={thunderstorm_icon} alt='Thunderstorm icon' />
        </ThunderstormNightFrame>
      );
    }
    if (iconCode === '13d') {
      return (
        <SnowDayFrame>
          <WeatherImage src={snow_icon} alt='Snow icon' />
        </SnowDayFrame>
      );
    }
    if (iconCode === '13n') {
      return (
        <SnowNightFrame>
          <WeatherImage src={snow_icon} alt='Snow icon' />
        </SnowNightFrame>
      );
    }
    if (iconCode === '50d') {
      return (
        <MistDayFrame>
          <WeatherImage src={mist_icon} alt='Mist icon' />
        </MistDayFrame>
      );
    }
    if (iconCode === '50n') {
      return (
        <MistNightFrame>
          <WeatherImage src={mist_icon} alt='Mist icon' />
        </MistNightFrame>
      );
    }
    return null;
  };

  const WeatherComponent = getWeatherComponent(iconCode);
  return (
    <>
      <WeatherImageContainer>{WeatherComponent}</WeatherImageContainer>
      <StatusContainer>
        <Description>{description}</Description>
      </StatusContainer>
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
