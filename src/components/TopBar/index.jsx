import { React, useState } from 'react';
import {
  SearchIcon,
  TopBarContainer,
  TopBarInput,
  NotFoundMessage,
} from './styles';
import search_icon from '../assets/search.png';
import getWeather from '../../api';

export default function TopBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [cityFound, setCityFound] = useState(true);

  const handleSearch = async () => {
    try {
      const data = await getWeather(inputValue);
      if (data) {
        onSearch(inputValue);
        setCityFound(true);
      } else {
        setCityFound(false);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setCityFound(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <TopBarContainer>
        <TopBarInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Search'
        />
        <SearchIcon
          onClick={() => {
            handleSearch();
          }}
        >
          <img src={search_icon} alt='Search icon' />
        </SearchIcon>
      </TopBarContainer>
      {!cityFound && <NotFoundMessage>City not found*</NotFoundMessage>}{' '}
    </>
  );
}
