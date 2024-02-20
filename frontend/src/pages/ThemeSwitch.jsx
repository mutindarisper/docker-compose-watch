// src/ThemeSwitch.js
import React from 'react';
import { useTheme } from './ThemeContext';
import { SwitchContainer } from './ThemeSwitch.styles';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchContainer onClick={toggleTheme}>
      {theme === 'light' ? '🌞' : '🌙'}
    </SwitchContainer>
  );
};

export default ThemeSwitch;
