'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

function Theme(theme) {
  return {
    tailwindTheme: theme === 'dark' ? 'dark' : '',
    iconTheme: theme === 'dark' ? 'ffffff' : '000000',
  };
}

export default function ThemeProvider({ children }) {
  const theme = {
    tailwindTheme: 'dark',
    iconTheme: 'ffffff',
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}