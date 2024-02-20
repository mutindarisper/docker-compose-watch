// src/App.styles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  /* Add other styles as needed */
`;
