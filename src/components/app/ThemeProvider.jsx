'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

function Theme(theme) {
  return {
    tailwindTheme: theme === 'dark' ? 'dark' : '',
    iconStyle: theme === 'dark' ? { color: 'ffffff' } : {},
  };
}

export default function ThemeProvider({ children }) {
  const theme = Theme('light');

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}