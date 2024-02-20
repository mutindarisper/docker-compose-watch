// src/ThemeSwitch.js
import React from 'react';
import Switch from '@mui/material/Switch';
import { useTheme } from './ThemeProvider';

const ThemeSwitch = () => {
  const { themeMode, toggleTheme } = useTheme();

  return <Switch checked={themeMode === 'dark'} onChange={toggleTheme} />;
};

export default ThemeSwitch;
