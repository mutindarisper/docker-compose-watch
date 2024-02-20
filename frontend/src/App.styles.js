// src/App.styles.js
import { styled } from '@mui/system';

export const AppContainer = styled('div')`
  background-color: ${(props) => (props.themeMode === 'light' ? '#ffffff' : 'gray')};
  color: ${(props) => (props.themeMode === 'light' ? '#000000' : '#ffffff')};
  /* Add other styles as needed */
`;
