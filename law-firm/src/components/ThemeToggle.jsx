import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <div className="toggle-ball">
        {theme === 'light' ? '🌙' : '☀️'}
      </div>
    </div>
  );
};

export default ThemeToggle;