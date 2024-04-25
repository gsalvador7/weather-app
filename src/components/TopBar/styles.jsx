import styled from 'styled-components';

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 1.75rem;
`;

export const TopBarInput = styled.input`
  display: flex;
  width: 23rem;
  height: 5rem;
  background: #ebfffc;
  border: none;
  outline: none;
  border-radius: 2.5rem;
  padding-left: 2.5rem;
  color: #626262;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const SearchIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background: #ebfffc;
  border-radius: 2.5rem;
  border: none;
  cursor: pointer;
`;

export const NotFoundMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.3rem;
  color: red;
  font-style: italic;
  font-size: 1.2rem;
`;
