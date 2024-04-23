import { React, useState } from 'react';
import { SearchIcon, TopBarContainer, TopBarInput } from './styles';
import search_icon from '../assets/search.png';

export default function TopBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = async () => {
    if (inputValue.trim() !== '') {
      onSearch(inputValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Chama a função de busca ao pressionar "Enter"
    }
  };

  return (
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
  );
}
